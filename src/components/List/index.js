import React from 'react'
import styled from "styled-components";

const ListWrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 1rem;
  
  color: ${props => props.theme.color.contrastText};
  background-color: ${props => props.theme.color.mainBg};
  }
`;

ListWrapper.Item = styled.div`
  display: flex;
  padding: 0.5rem;
  background-color: ${props => props.theme.color.secondBg};
`

export default function List({
  pokeCard
}) {  
  const name = pokeCard.name,
    number = pokeCard.number,
    types = pokeCard.types,
    supertype = pokeCard.supertype,
    subtype = pokeCard.subtype,
    hp = pokeCard.hp;

  return(
    <ListWrapper>
      <ListWrapper.Item>
        {props.children}
      </ListWrapper.Item>
    </ListWrapper>
  );
};