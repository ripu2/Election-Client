import React, { useEffect } from "react";
import { HeaderContainer, HeaderTypography, ParentCotainer, WinnerTypography } from "./style";
import Election from "../etherum/election";
import {
  useGetAllParticipants,
  useGetManagerStatus,
  useReducerElection,
} from "../hooks/electionHooks";
import { ElectionContex } from "../context/electionContext";
import ParticipantsTables from "../components/ParticipantsTables";
import WinnerButton from "../components/commonButtons/WinnerButton";

function HomePage() {
  const [state, dispatch] = useReducerElection();
  const { getParticipants } = useGetAllParticipants(dispatch);
  const { isManager } = useGetManagerStatus(dispatch)

  const getAllPaticipants = async () => {
    await isManager(state.currentAccount)
    await getParticipants();
  };

  useEffect(() => {
    getAllPaticipants();
  }, []);

  return (
    <ElectionContex.Provider value={{ state, dispatch }}> 
      <ParentCotainer>
        <HeaderContainer>
          <HeaderTypography>Muncipality Election</HeaderTypography>
          {
            state.isManager && <WinnerButton />
          }
        </HeaderContainer>
        <ParticipantsTables />
        {
          state.winner && <WinnerTypography>{state.winner} has won this election</WinnerTypography>
        }
      </ParentCotainer>
    </ElectionContex.Provider>
  );
}

export default HomePage;
