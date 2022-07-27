import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  height: 100%;
`

export const NavLink = styled.a`
  padding: 0 1.6rem;
  color: var(--white);
  font-size: 1.6rem;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: red;
  }
`
