import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export default function App(){
  return (
    <>
      <GlobalStyle />
      <SCPage>
        <Header />
        <Main />
        <Footer />
      </SCPage>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  body{
    background-color:#FB6B6B;
  }
  *{
    box-sizing:border-box;
  }
`

const SCPage = styled.div`
  width: 100%;
  height:auto;

  display:flex;
  flex-direction:column;
`