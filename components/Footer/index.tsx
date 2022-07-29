import Link from 'next/link'
import React from 'react'

// Styles
import * as S from './styles'

const Footer = () => {
  return (
    <S.Container>
      <S.SegmentContainer>
        <S.Title>Title</S.Title>
        <S.OptionsContainer>
          <Link href="/">
            <a>
              <S.OptionLine>Line</S.OptionLine>
            </a>
          </Link>
        </S.OptionsContainer>
      </S.SegmentContainer>
    </S.Container>
  )
}

export default Footer
