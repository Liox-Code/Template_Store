import styled from 'styled-components'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Header = styled.div`
  height: 100%;
`

export const Container = styled.div`
  display: grid;
  justify-content: space-between;
  grid-auto-flow: column;
  grid-gap: 1rem;
  width: 100%;
  height: 100%;
  color: var(--gray);
  * {
    display: grid;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`

export const StartContainer = styled.div`
  color: var(--gray);
`

export const CenterContainer = styled.span`
  color: var(--gray);
`

export const EndContainer = styled.span`
  color: var(--gray);
`

export const Icon = styled(FontAwesomeIcon)`
  width: 16px;
  height: 16px;
  color: var(--gray);
  cursor: pointer;
`
