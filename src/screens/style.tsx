import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const ParentCotainer = styled(Box)(({}) => ({
    // display: 'flex',
    padding: 20
}));

export const HeaderContainer = styled(Box)(({}) => ({
    display: 'flex',
    justifyContent: 'center',
    width: '100vw'
}))

export const HeaderTypography = styled(Typography)(({}) => ({
    fontSize: 30,
    fontWeight: 800,
    color: '#570A57'
}))

export const WinnerTypography = styled(Typography)(({}) => ({
    fontSize: 30,
    fontWeight: 800,
    color: '#FF4949',
    textAlign: 'center'
}))