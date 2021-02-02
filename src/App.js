import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Link, Switch, Route, Redirect } from 'react-router-dom'
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
  return (
    <Theme>
      <GlobalStyle />
        <Header>
          <Link to={`/`} >
            Pokémon Trading Cards
          </Link>
        </Header>
        <Switch>
          <Route path={"/"} exact component={List} />
          <Route path={"/cards/:id"} exact component={DetailedScreen} />
          <Redirect to={"/"} />
        </Switch>
    </Theme>
  );
}

export default App;
