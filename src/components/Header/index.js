import React from 'react'
import styled from 'styled-components'

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

function Header(props) {
  return(
    <HeaderWraper>
        {props.children}
    </HeaderWraper>
  )
}

export default Header;