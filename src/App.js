import React, { useState, useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Theme from './Theme'
import Header from './components/Header'
//import List from './components/List'

import axios from 'axios'

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }

  body{
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html, body{
    min-height: 100vh;
  }
`

const ListWrapper = styled.main`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(220px, 245px));
  grid-gap: 2rem;
  justify-content: center;
  padding: 2rem;
  background-color: ${props => props.theme.color.mainBg};
  }
`;

const ListItem = styled.div`
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`

const DetailedWrap = styled.article`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;

  display: flex;
  flex-flow: column nowrap;
  color: black;
  background-color: ${props => props.theme.color.secondBg};
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.color.secondary};
  width: 500px;
  max-width: 80%;

  transition: 200ms ease-in-out;

  ${props => {
    if(props.activeDetail === props.id) {
      return`
        transform: translate(-50%, -50%) scale(1);
      `;
    } return `
        transform: translate(-50%, -50%) scale(0);
      `;
  }}
`

DetailedWrap.Header = styled.header`
  width: 100%;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & button{
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-size: 1.25rem;
    font-weight: bold;
  }
`

DetailedWrap.Content = styled.section`
  padding: 10px 15px;
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5); 
  pointer-events: none;

  transition: 200ms ease-in-out;
  
  ${props => {
    if(props.toggle) {
      return`
        opacity: 1;
      `;
    } return `
        opacity: 0;
      `;
  }}
`

function App() {
  const [pokedex, setPokedex] = useState([]);
  const [detailedOpened, setDetailedOpened] = useState(false);
  const [detailedCard, setDetailedCard] = useState();
  
  const url = 'https://api.pokemontcg.io/v1/cards';

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
      console.log(response)
      setPokedex(response.data.cards)
    });
  }, [])

  console.log(pokedex)

  function OpenDetailedScreen(card){
    setDetailedCard(card.id)
    setDetailedOpened(true)
  }

  function CloseDetailedScreen(){
    setDetailedCard(null)
    setDetailedOpened(false)    
  }

  return (
    <>
      <Theme>
        <GlobalStyle />
          <Header>
            <h1>Pokemon Trading Cards</h1>
          </Header>
          <ListWrapper>
            {pokedex.map((card, index) => {
              return(
                <>
                  <ListItem
                    key={card.id}
                    onClick={() =>{OpenDetailedScreen(card)}}
                  >
                    <img src={card.imageUrl} alt={`${card.name} card`} />
                  </ListItem>
                  <DetailedWrap
                    id={card.id}
                    activeDetail={detailedCard}
                  >
                    <DetailedWrap.Header>
                      <h3>{card.name}</h3>
                      <button
                        onClick={() =>{CloseDetailedScreen()}}
                      >
                        &times;
                      </button>
                    </DetailedWrap.Header>
                    <DetailedWrap.Content>
                      <h6>{card.number}</h6>
                    </DetailedWrap.Content>
                  </DetailedWrap>
                </>
              )
            })}
          </ListWrapper>
          <Overlay toggle={detailedOpened}></Overlay>
      </Theme>
    </>
  );
}

export default App;