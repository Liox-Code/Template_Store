import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    'HeaderContainer'
    'BannerContainer'
    'BodyContainer'
    'FooterContainer';
  min-height: 100vh;
  grid-template-rows: max-content auto max-content;
`

export const HeaderContainer = styled.div`
  grid-area: HeaderContainer;
  height: 60px;
  background-image: var(--pri-sec-090deg-gradient);
  z-index: 10;
`

export const BannerContainer = styled.div`
  grid-area: BannerContainer;
`

export const BodyContainer = styled.div`
  grid-area: BodyContainer;
  padding: 40px 0;
  background-color: var(--white);
`

export const FooterContainer = styled.div`
  grid-area: FooterContainer;
  padding: 20px 0;
  background-image: var(--pri-sec-270deg-gradient);
`

export const PaddingContainer = styled.div`
  height: 100%;
  padding: 0 60px;
`
