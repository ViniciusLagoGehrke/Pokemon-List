import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";

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

  return (
    <DetailedWrap>
      <DetailedWrap.Header>
        Carta
      </DetailedWrap.Header>
      <DetailedWrap.Content>
      </DetailedWrap.Content>
    </DetailedWrap>
  );
}