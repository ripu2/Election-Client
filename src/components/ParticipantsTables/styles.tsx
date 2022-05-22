import { Box, TableRow, Typography } from "@mui/material";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

import { styled } from "@mui/system";

export const ParentCotainer = styled(Box)(({}) => ({
    display: 'flex',
    padding: 20,
    marginTop: 50,
    justifyContent: 'center',
    width: '100vw'
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#15133C',
      color: "#FAF0D7",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    // '&:nth-of-type(odd)': {
    //   backgroundColor: "#B1BCE6",
    // },
    // hide last border
    // '&:last-child td, &:last-child th': {
    //   border: 0,
    // },
  }));

// export const HeaderContainer = styled(Box)(({}) => ({
//     display: 'flex',
//     justifyContent: 'center',
//     width: '100vw'
// }))

// export const HeaderTypography = styled(Typography)(({}) => ({
//     fontSize: 30,
//     fontWeight: 800,
//     color: '#570A57'
// }))