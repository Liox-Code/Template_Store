import React from 'react'
import Link from 'next/link'

// Styles
import * as S from './styles'

const Menu = () => {
  return (
    <S.Container>
      <Link href="/">
        <a>
          <S.NavLink>Home</S.NavLink>
        </a>
      </Link>
      {/* <Link href="/">
        <a>
          <S.NavLink>Catalog</S.NavLink>
        </a>
      </Link>
      <Link href="/">
        <a>
          <S.NavLink>About</S.NavLink>
        </a>
      </Link>
      <Link href="/">
        <a>
          <S.NavLink>Contact</S.NavLink>
        </a>
      </Link> */}
    </S.Container>
  )
}

export default Menu
