import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Switch, Route, Redirect } from 'react-router-dom'
import Theme from './Theme'
import Header from './components/Header'
import List from './components/List'
import DetailedScreen from './components/DetailedScreen/Default'

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
  // const [input, setInput] = useState('');
  // const [pokedex, setPokedex] = useState([]);
  // const [pokedexDefault, setPokedexDefault] = useState([]);

  // const updateInput = (input) => {
  //   const filtered = pokedexDefault.filter(card => {
  //     return card.name.toLowerCase().includes(input.toLowerCase())
  //   })
  //   setInput(input);
  //   setPokedex(filtered);
  // }

  return (
    <>
      <Theme>
        <GlobalStyle />
          <Header
            // SearchBarInput={input}
            // SearchBarUpdate={updateInput}
          >
            Pokémon Trading Cards
          </Header>
          <Switch>
            <Route path={"/"} exact component={List} />
            <Route path={"/cards/:id"} exact component={DetailedScreen} />
            <Redirect to={"/"} />
          </Switch>
      </Theme>
    </>
  );
}

export default App;
