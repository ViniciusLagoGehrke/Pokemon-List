import React from 'react'
import styled from 'styled-components'

const StyledItem = styled.div`
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  height: 100%;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

    img{
      height: 100%;
    }
`

export default function ListItem({ pokeCard }) {  
  const id = pokeCard.id,
  name = pokeCard.name,
  number = pokeCard.number,
  supertype = pokeCard.supertype,
  imageUrl = pokeCard.imageUrl;

  return(
    <StyledItem
      key={`Card+${id}`}
      pokemon={name}
      number={number}
      supertype={supertype}
      onClick={()=>{}}
    >
      <img 
        src={imageUrl}
        alt={`${name} card`}
      />
    </StyledItem>
  );
};