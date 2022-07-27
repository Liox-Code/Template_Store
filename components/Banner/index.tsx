import React from 'react'
import Image from 'next/image'

// Styles
import * as S from './styles'

const Banner = () => {
  return (
    <S.Container>
      <S.ImageContainer>
        <Image
          src="/images/printerImage.png"
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
        />
      </S.ImageContainer>
    </S.Container>
  )
}

export default Banner
