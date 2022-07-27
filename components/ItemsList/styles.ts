import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-gap: 2rem;
`

export const Title = styled.h2`
  font-size: var(--x5);
  color: var(--primary-color);
`

export const ItemsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 20rem);
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
`
