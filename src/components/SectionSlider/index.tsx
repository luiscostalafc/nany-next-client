import React from 'react'
import Slider from 'react-slick'
import SimpleImageSlider from 'react-simple-image-slider'

import Container from 'components/Container'
import Heading from 'components/Heading'
import ReviewCard from 'components/ReviewCard'

import * as S from './styles'
import { SectionSliderProps } from 'types/api'

const settings = {
  dots: true,
  arrows: false,
  slidesToShow: 2,
  infinite: false,
  speed: 500,
  rows: 2,
  slidesPerRow: 1,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        rows: 2,
        slidesPerRow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

const SectionSlider = ({ title, reviews }: SectionSliderProps) => {
  const images = reviews.map((review) => review.photo.url)

  return (
    <Container>
      <Heading reverseColor>{title}</Heading>

      <S.Content>
        <SimpleImageSlider images={images} width={896} height={504} />
      </S.Content>
    </Container>
  )
}

export default SectionSlider
