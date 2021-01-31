import React from 'react'
import styled from 'styled-components'
import SearchBar from '../SearchBar'

const HeaderWraper = styled.header`
  display:flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  min-height: 5rem;
  padding: 1rem;

  color: ${props => props.theme.color.contrastText};
  background-color: ${props => props.theme.color.primary};
  }
`;

HeaderWraper.Title = styled.h2`

`

function Header(props) {
  const input = props.SearchBarInput;
  const updateInput = props.SearchBarUpdate;
  
  return(
    <HeaderWraper>
      <HeaderWraper.Title>
        {props.children}
      </HeaderWraper.Title>
      <SearchBar
        keyword={input}
        setKeyword={updateInput}
      />
    </HeaderWraper>
  )
}

export default Header;