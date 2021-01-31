import React from 'react'
import styled from "styled-components";

const StyledOverlay = styled.div`
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

function Overlay({ toggle }){
  return(
    <StyledOverlay toggle={toggle} />
  )
}

export default Overlay;