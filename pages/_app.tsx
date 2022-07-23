import React from 'react'
import { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'

// Components
import Layout from '../components/Layout'

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Arial;
    }

    html{
        font-size: 62.5%;
    }

    :root{
    }
`

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
      <GlobalStyle />
    </Layout>
  )
}

export default MyApp
