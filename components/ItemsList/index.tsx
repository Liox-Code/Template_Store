import React from 'react'

// Styles
import * as S from './styles'

type TItemsListProps = {
  children?: React.ReactNode
  title?: string
}

const ItemsList: React.FC<TItemsListProps> = (props: TItemsListProps) => {
  const { children, title = null } = props

  return (
    <S.Container>
      {title && <S.Title>{title}</S.Title>}
      <S.ItemsList>{children}</S.ItemsList>
    </S.Container>
  )
}

export default ItemsList
