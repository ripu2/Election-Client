import _ from "lodash";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Dispatch, useReducer } from "react";
import { Particpants, State } from "../types/types";
import { initialState } from "../context/electionContext";
import Election from "../etherum/election"
import provider from "../etherum/ethers";

const reducer = {
    setParticipants: function (
        state: State,
        action: PayloadAction<Particpants[] | undefined>
    ) {
        state.participants = action.payload
    },
    setManager: function (
        state: State,
        action: PayloadAction<boolean>
    ) {
        state.isManager = action.payload
    },
    setCurentAccount: function (
        state: State,
        action: PayloadAction<string>
    ) {
        state.currentAccount = action.payload
    },
    setWinnder: function (
        state: State,
        action: PayloadAction<string>
    ) {
        state.winner = action.payload
    }
};

const slice = createSlice({
    initialState,
    name: "election",
    reducers: reducer
});

export const ElectionAction = slice.actions;

export function useReducerElection() {
    const reducerInfo = useReducer(slice.reducer, initialState);
    return reducerInfo;
}

// custom hooks

export function useGetManagerStatus(dispatch: Dispatch<any> | null) {
    const isManager = async (currentAccount: string) => {
        const { getParticipants } = useGetAllParticipants(dispatch)
        try {
            const signer = await provider.getSigner().getAddress()
            if(signer!== currentAccount) await getParticipants()
            else {
                const manager = await Election.manager()
                if(manager === signer  && dispatch) dispatch(ElectionAction.setManager(true))
            }
        } catch (error) {
            
        }
    }

    return { isManager }
}

export function useGetAllParticipants(dispatch: Dispatch<any> | null) {
    const getParticipants = async () => {
        const { isManager } = useGetManagerStatus(dispatch)
        try {
            const participants = await Election.getCandidates()
            let arr: Particpants[] = []
            const signer = await provider.getSigner().getAddress()
            participants.forEach((element: any) => {
                const obj: Particpants = {
                    name: element.name,
                    candidateAddress: element.CandidateAddress,
                    voteCount: element.voteCount.toNumber()
                }
                arr.push(obj)
            });
            if (dispatch) {
                await isManager(signer)
                dispatch(ElectionAction.setParticipants(arr))
                dispatch(ElectionAction.setCurentAccount(signer))
            }
        } catch (error) {
            alert(error.message)
        }
    }

    return { getParticipants }
}

export function useCastVote(dispatch: Dispatch<any> | null) {
    const castVote = async (index: any) => {
        const { getParticipants } = useGetAllParticipants(dispatch)

        try {
            await Election.castVote(index)
            await getParticipants()
        } catch (error) {
            alert(error.message)
        }
    }

    return { castVote }
}

export function usePickWinner(dispatch: Dispatch<any> | null) {
    const getWinner = async () => {
        try {
            const winner = await Election.pickWinner()
            if(dispatch) dispatch(ElectionAction.setWinnder(winner[0]))
        } catch (error) {
            
        }
    }

    return { getWinner }
}
