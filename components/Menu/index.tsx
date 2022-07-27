import React from 'react'
import Link from 'next/link'

// Styles
import * as S from './styles'

const Menu = () => {
  return (
    <S.Container>
      <Link href="/">
        <S.NavLink>Home</S.NavLink>
      </Link>
      <Link href="/">
        <S.NavLink>Catalog</S.NavLink>
      </Link>
      <Link href="/">
        <S.NavLink>About</S.NavLink>
      </Link>
      <Link href="/">
        <S.NavLink>Contact</S.NavLink>
      </Link>
    </S.Container>
  )
}

export default Menu
