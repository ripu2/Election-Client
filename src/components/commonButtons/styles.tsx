import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";


export const ButtonContainer = styled(Button)(({}) => ({
    border: '2px solid #36AE7C',
    borderRadius: 10,
    height: 50,
    minWidth: 100,
    diplay: 'flex',
    flexDirection: 'column',
    padding: 20,
    textTransform: 'none',
    '&:hover': {
        backgroundColor: '#CCF3EE',
    }
}));

export const ButtonTypography = styled(Typography)(({}) => ({
    color: '#251D3A'
}));
