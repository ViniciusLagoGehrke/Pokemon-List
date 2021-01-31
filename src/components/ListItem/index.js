import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import {
  selectCardId,
  selectCardName,
  selectCardNumber,
  selectCardSupertype,
  selectCardImageUrl
} from '../../redux/cardSlice'
import { openDetailedScreen, selectDetailScreenId } from '../../redux/detailScreenSlice'

const StyledItem = styled.div`
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

    img{
      height: 100%;
    }
`

export default function ListItem({ pokeCard }) {  
  const id = useSelector(selectCardId),
    name = useSelector(selectCardName),
    number = useSelector(selectCardNumber),
    supertype = useSelector(selectCardSupertype),
    imageUrl = useSelector(selectCardImageUrl);

  return(
    <StyledItem
      key={`Card+${id}`}
      pokemon={name}
      number={number}
      supertype={supertype}
      onClick={openDetailedScreen(selectDetailScreenId)}
    >
      <img 
        src={imageUrl}
        alt={`${name} card`}
      />
    </StyledItem>
  );
};