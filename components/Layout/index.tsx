import React from 'react'

// Styles
import * as S from './styles'

interface IChildrenProps {
  children: JSX.Element | JSX.Element[]
}

const Layout: React.FC<IChildrenProps> = ({ children }: IChildrenProps) => {
  return (
    <S.Container>
      <S.BodyContainer>{children}</S.BodyContainer>
    </S.Container>
  )
}

export default Layout
