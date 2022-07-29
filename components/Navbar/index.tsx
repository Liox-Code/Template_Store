import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Styles
import * as S from './styles'

const Navbar = () => {
  return (
    <S.Header>
      <S.Container>
        <S.StartContainer>
          <S.Icon icon={['fas', 'bars']} />
        </S.StartContainer>
        <S.CenterContainer>
          <Link href="/">
            <a>
              <Image
                src="/images/play-store.png"
                alt="Web Page Icon"
                width={36}
                height={36}
              />
            </a>
          </Link>
        </S.CenterContainer>
        <S.EndContainer>
          <S.Icon icon={['fas', 'magnifying-glass']} />
        </S.EndContainer>
      </S.Container>
    </S.Header>
  )
}

export default Navbar
