import React from "react";
import { useReducerElection } from "../../hooks/electionHooks";
import { ParentCotainer, StyledTableCell, StyledTableRow } from "./styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Particpants } from "../../types/types";
import { useElectionContext } from "../../context/electionContext";
import VoteButton from "../commonButtons";

export default function ParticipantsTables() {
  const { state, dispatch } = useElectionContext();

  return (
    <ParentCotainer>
      <TableContainer style={{ margin: "0 auto" }}>
        <Table
          sx={{ maxWidth: "60%" }}
          style={{ margin: "0 auto" }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Participant Name</StyledTableCell>
              <StyledTableCell align="left">Cast Vote</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.participants?.map(
              (participant: Particpants, index: number) => {
                return (
                  <StyledTableRow key={index}>
                    <StyledTableCell align="left">
                      {participant.name}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <VoteButton index={index} />
                    </StyledTableCell>
                  </StyledTableRow>
                );
              }
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </ParentCotainer>
  );
}
