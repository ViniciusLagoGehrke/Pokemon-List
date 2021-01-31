import React, { useState, useEffect } from 'react'
import { createGlobalStyle } from 'styled-components'

import Theme from './Theme'
import Header from './components/Header'
import List from './components/List'
import ListItem from './components/ListItem'
import DetailedScreen from './components/DetailedScreens/components/Default'
import Overlay from './components/Overlay'

import { loadCardAsync } from './redux/cardSlice'
import { useDispatch } from 'react-redux'
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

function App() {
  const [input, setInput] = useState('');
  const [pokedex, setPokedex] = useState([]);
  const [pokedexDefault, setPokedexDefault] = useState([]);
  const [detailedOpened, setDetailedOpened] = useState(false);
  const [detailedCard, setDetailedCard] = useState();
  
  const dispatch = useDispatch();
  dispatch(loadCardAsync());

  const url = 'https://api.pokemontcg.io/v1/cards';

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
      console.log(response)
      setPokedex(response.data.cards)
      setPokedexDefault(response.data.cards)
    });
  }, [])

  const updateInput = (input) => {
    const filtered = pokedexDefault.filter(card => {
      return card.name.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input);
    setPokedex(filtered);
  }

  return (
    <>
      <Theme>
        <GlobalStyle />
          <Header
            SearchBarInput={input}
            SearchBarUpdate={updateInput}
          >
            Pokémon Trading Cards
          </Header>
          <List>
            {pokedex.map((card) => {
              console.log(card)
              return(
                <>
                  <ListItem
                    key={`Card:${card.id}`}
                    pokeCard={card}
                  />
                  <DetailedScreen
                    key={`Details:${card.id}`}
                  />
                </>
              )
            })}
          </List>
          <Overlay toggle={detailedOpened} />
      </Theme>
    </>
  );
}

export default App;