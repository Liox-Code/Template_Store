import React from 'react'
import { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'

// Icons
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

// Components
import Layout from '../components/Layout'

config.autoAddCss = false
library.add(faMagnifyingGlass)

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

    a, span, button {
      user-select: none;
    }

    :root{
        --primary-color: #8860D0;
        --secondary-color: #5680E9;
        --sky-blue: #84CEEB;
        --blueverry: #5AB9EA;
        --gray: #C1C8E4;
        --white: #FFFFFF;
        --black: #000000;

        --pri-sec-045deg-gradient: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
        --pri-sec-090deg-gradient: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
        --pri-sec-270deg-gradient: linear-gradient(270deg, var(--primary-color), var(--secondary-color));


        --x1: 0.4rem;
        --x2: 0.8rem;
        --x3: 1.2rem;
        --x4: 1.6rem;
        --x5: 2.0rem;
        --x6: 2.4rem;
        --x7: 2.8rem;
        --x8: 3.2rem;
        --x9: 3.6rem;
        --x10: 4rem;
    }
`

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
