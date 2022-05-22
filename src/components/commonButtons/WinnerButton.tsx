import { CircularProgress } from '@mui/material'
import React, { useState } from 'react'
import { useElectionContext } from '../../context/electionContext'
import { usePickWinner } from '../../hooks/electionHooks'
import { ButtonContainer, ButtonTypography } from './styles'

export default function WinnerButton() {

    const [loading, setLoading] = useState(false)
    const { dispatch } = useElectionContext()

    const { getWinner } = usePickWinner(dispatch)

    const pickWinner = async () => {
        if(!loading) {
        setLoading(true)
        await getWinner()
        setLoading(false)
        }
    }
  return (
    <ButtonContainer style={{marginLeft: 100}}>
        <ButtonTypography onClick={() => pickWinner()}>
            {loading? <CircularProgress /> : 'Pick Winner'}
        </ButtonTypography>
    </ButtonContainer>
  )
}
