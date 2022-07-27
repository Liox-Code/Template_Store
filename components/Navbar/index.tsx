import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Components
import Menu from '../Menu'

// Styles
import * as S from './styles'

const Navbar = () => {
  return (
    <S.Header>
      <S.Container>
        <Link href="/">
          <S.StartContainer>
            <Image
              src="/images/play-store.png"
              alt="Web Page Icon"
              width={36}
              height={36}
            />
          </S.StartContainer>
        </Link>
        <S.CenterContainer>
          <Menu />
        </S.CenterContainer>
        <S.EndContainer>
          <S.Icon icon={['fas', 'magnifying-glass']} />
        </S.EndContainer>
      </S.Container>
    </S.Header>
  )
}

export default Navbar
