import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 2rem;
`

export const SegmentContainer = styled.div`
  display: grid;
  grid-template-rows: 20px max-content;
  grid-gap: 0.4rem;
`

export const Title = styled.a`
  color: var(--gray);
  font-size: var(--x4);
`

export const OptionsContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 0.2rem;
`

export const OptionLine = styled.a`
  color: var(--gray);
  font-size: var(--x3);
  text-decoration: none;
`
