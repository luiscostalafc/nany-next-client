import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'
import { SectionScheduleProps } from './types'

import * as S from './styles'

const SectionAgenda = ({ title, description }: SectionScheduleProps) => (
  <Container id="agenda">
    <Heading reverseColor>{title}</Heading>
    <S.Text dangerouslySetInnerHTML={{ __html: description }} />
  </Container>
)

export default SectionAgenda
