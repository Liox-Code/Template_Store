import React from 'react'
import Image from 'next/image'

// Styles
import * as S from './styles'

const Item = () => {
  return (
    <S.Container>
      <S.ImageContainer>
        <Image
          src="/images/printerImage.png"
          alt="Product Image"
          layout="fill"
          objectFit="cover"
        />
      </S.ImageContainer>
      <S.ContentContainer>
        <S.Name>Producto</S.Name>
        <S.Price>$ 50.50</S.Price>
      </S.ContentContainer>
    </S.Container>
  )
}

export default Item
