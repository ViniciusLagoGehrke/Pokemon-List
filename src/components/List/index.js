import React from 'react'
import styled from "styled-components";

const ListWrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 245px));
  grid-gap: 2rem;
  justify-content: center;

  padding: 2rem;
  background-color: ${props => props.theme.color.mainBg};
  }
`;

export default function List(props) {  
  return(
    <ListWrapper>
      {props.children}
    </ListWrapper>
  );
};