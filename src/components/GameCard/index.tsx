import React from 'react'

import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import * as S from './styles'

export type GameCardProps = {
  title?: string
  text: string
  photo: {
    url: string
  }
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
}

const GameCard = ({
  title,
  text,
  photo,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small'
}: GameCardProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <S.ImageBox>
      <img src={photo.url} alt={title} />
    </S.ImageBox>
    <S.Content>
      <S.Info>
        <S.Title>{text}</S.Title>
      </S.Info>
    </S.Content>
  </S.Wrapper>
)

export default GameCard
