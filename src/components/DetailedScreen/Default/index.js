import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import _ from 'lodash';
import { getCard } from '../../../actions/cardActions';

const DetailedWrap = styled.article`
  height: 100%;
  width: 100%;

  display: flex;
  flex-flow: column nowrap;
  color: black;
  background-color: ${props => props.theme.color.mainBg};
`

DetailedWrap.Header = styled.header`
  width: 100%;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & button{
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-size: 1.25rem;
    font-weight: bold;
  }
`

DetailedWrap.Content = styled.section`
  padding: 10px 15px;
`

export default function DetailedScreen (props) {

  const cardId = props.match.params.id
  const dispatch = useDispatch()
  const cardState = useSelector(state => state.Card)

  useEffect(() => {
    dispatch(getCard(cardId))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const ShowData = () => {
    if(!_.isEmpty(cardState.data[cardId])) {
      const cardData = cardState.data[cardId]
      return (
        <>
          <img src={cardData.imageUrl} />
          <h1>{cardData.id}</h1>
          <h1>{cardData.name}</h1>
          <h2>{cardData.supertype} - {cardData.subtype}</h2>
          <h3>HP {cardData.hp}</h3>
          {cardData.types.map(i => {
            return <p>{i}</p>
          })}
          <h3>Attacks</h3>
          {cardData.attacks.map(i => {
            return (
              <>
                <p>{i.name} | {i.cost}</p>
                <p>{i.text}</p>
              </>
            )
          })}
          
        </>
      )
    }

    if(cardState.loading) {
      return <p>Loading...</p>
    }

    if (cardState.errorMsg !== "") {
      return <p>{cardState.errorMsg}</p>
    }

    return <p>error getting card</p>
  }

  return (
    <DetailedWrap>
      <DetailedWrap.Header>
        Carta
      </DetailedWrap.Header>
      <DetailedWrap.Content>
       {ShowData()}
      </DetailedWrap.Content>
    </DetailedWrap>
  );
}