import { CircularProgress } from '@mui/material'
import React, { useState } from 'react'
import { useElectionContext } from '../../context/electionContext'
import { useCastVote } from '../../hooks/electionHooks'
import { ButtonContainer, ButtonTypography } from './styles'

export default function VoteButton(props: {
    index: number
}) {
    const [loading, setLoading] = useState(false)
    const {dispatch} = useElectionContext()

    const { castVote } = useCastVote(dispatch)

    const onClick = async () => {
        setLoading(true)
        await castVote(props.index)
        setLoading(false)
    }
    
  return (
    <ButtonContainer>
        <ButtonTypography onClick={() => onClick()}>
            {loading? <CircularProgress />  : 'Cast Vote'}
        </ButtonTypography>
    </ButtonContainer>
  )
}
