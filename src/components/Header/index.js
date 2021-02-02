import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderWraper = styled.header`
  display:flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  min-height: 5rem;
  padding: 1rem;

  & .link{
    color: ${props => props.theme.color.contrastText};
    font-weight: 800;
    font-size: 2.5rem;
    text-decoration: none;
    padding: 2rem;
  }
  background-color: ${props => props.theme.color.primary};
  }
`;

function Header(props) {
  return(
    <HeaderWraper>
      <Link className="link" to={`/`} >
        {props.children}
      </Link>
    </HeaderWraper>
  )
}

export default Header;