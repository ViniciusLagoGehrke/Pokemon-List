import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledPrevious = styled.button`
  position: fixed;
  top: 50%;
  left: 5%;
  height: 55px;
  width: 55px;
  border-radius: 50%;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  z-index: 1;

  color: ${props => props.theme.color.contrastText};
  background-color: ${props => props.theme.color.third};

    &::before{
      content: "<";
    }
  }
`;

export default function Previous(props){
  return(
    <StyledPrevious>
      <Link to={props.link} />
    </StyledPrevious>
  )
};