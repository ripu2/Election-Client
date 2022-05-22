import React, { useContext } from "react";
import { DefaultContext, State } from "../types/types";

export const initialState: State = {
    participants: undefined,
    isManager: false,
    currentAccount: "",
    winner: undefined
};

const defaultVal: DefaultContext<State> = {
  state: initialState,
  dispatch: null
};

export const ElectionContex = React.createContext(defaultVal);

export function useElectionContext() {
  return useContext(ElectionContex);
}