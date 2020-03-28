import React, {useState} from 'react'
import {InputCard} from './InputCard'
import {Card} from './Card'
import {StyledPageDiv, StyledUpperDiv, StyledLowerDiv} from './styles/style'

interface ICardState {
  title: string
  message: string
}

const KeeperScene: React.FC = () => {
  const [inputState, setInputState] = useState('')
  const [cardsState, setCardsState] = useState<ICardState[]>([])

  const handleInputChange: (e: React.FormEvent<HTMLInputElement>) => void = (e) => {
    setInputState((e.target as HTMLInputElement).value)
  }

  const addCard: (e: React.FormEvent<HTMLInputElement>) => void = () => {
    console.log(inputState)
  }


  return (
    <StyledPageDiv>
      <StyledUpperDiv>
        <InputCard value={inputState} onChange={handleInputChange} onSubmit={addCard}/>
      </StyledUpperDiv>

      <StyledLowerDiv>
        <Card/>
      </StyledLowerDiv>
    </StyledPageDiv>
  )
}

export {
  KeeperScene
}