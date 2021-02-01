import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledNext = styled.Link`
  position: fixed;
  top: 50%;
  right: 5%;
  height: 55px;
  width: 55px;
  border-radius: 50%;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  z-index: 5;

  color: ${props => props.theme.color.contrastText};
  background-color: ${props => props.theme.color.third};

    &::before{
      content: ">";
    }
  }
`;

export default function Next(props){
  return(
    <StyledNext>
      <Link to={props.link} />
    </StyledNext>
  )
};