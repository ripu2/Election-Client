import { Dispatch } from "react";

export interface Particpants{
    name: string,
    candidateAddress: string,
    voteCount: number
}

export interface State {
    participants?: Particpants[],
    isManager: boolean,
    currentAccount: string,
    winner?: string
}

export interface DefaultContext<T> {
    state: T;
    dispatch: null | Dispatch<any>;
  }