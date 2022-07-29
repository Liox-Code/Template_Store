import React from 'react'

// Components
import ItemsList from '../components/ItemsList'
import Item from '../components/Item'

const index = () => {
  return (
    <ItemsList title="Lista Productos">
      <Item />
      <Item />
    </ItemsList>
  )
}

export default index
