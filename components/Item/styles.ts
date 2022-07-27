import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 160px;
  background-color: var(--gray);
  border-radius: 12px 12px 0 0;
`

export const ContentContainer = styled.div`
  display: grid;
  justify-items: center;
  grid-gap: 0.4rem;
  padding: 0.8rem;
  background-image: var(--pri-sec-045deg-gradient);
  border-radius: 0 0 12px 12px;
`

export const Name = styled.h3`
  color: var(--gray);
  font-size: var(--x4);
`

export const Price = styled.span`
  color: var(--gray);
  font-size: var(--x3);
  text-align: justify;
`
