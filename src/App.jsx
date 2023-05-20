import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import cards from './mock.js';

export default function App(){

  let [counter, setCounter] = useState(0);
  let [goRecall, setGoRecall] = useState(false);

  return (
    <>
      <GlobalStyle />
      {!goRecall && (
        <Welcome setGoRecall={setGoRecall} />
      )}
      {goRecall && (
        <SCPage>
          <Header />
          <Main cards={cards} counter={counter} setCounter={setCounter} />
          <Footer counter={counter} />
        </SCPage>
      )}
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