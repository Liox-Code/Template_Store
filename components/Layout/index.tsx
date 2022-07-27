import React from 'react'

// Components
import Banner from '../Banner'
import Navbar from '../Navbar'
import Footer from '../Footer'

// Styles
import * as S from './styles'

interface IChildrenProps {
  children: JSX.Element | JSX.Element[]
}

const Layout: React.FC<IChildrenProps> = ({ children }: IChildrenProps) => {
  return (
    <S.Container>
      <S.HeaderContainer>
        <S.PaddingContainer>
          <Navbar />
        </S.PaddingContainer>
      </S.HeaderContainer>
      <S.BannerContainer>
        <Banner />
      </S.BannerContainer>
      <S.BodyContainer>
        <S.PaddingContainer>{children}</S.PaddingContainer>
      </S.BodyContainer>
      <S.FooterContainer>
        <S.PaddingContainer>
          <Footer />
        </S.PaddingContainer>
      </S.FooterContainer>
    </S.Container>
  )
}

export default Layout
