import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import _ from 'lodash';
import { getCard } from '../../../actions/cardActions';

const DetailedWrap = styled.article`
  padding: 2rem;
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  @media(min-width: 768px){
    display:grid;
    grid-template-columns: 300px 1fr;
  }

  color: black;
  background-color: ${props => props.theme.color.secondBg};
`

DetailedWrap.Card = styled.img`
  flex: 1 1 auto;
  width: 100%;
  height: auto;

  /*border: 1px blue solid;  debuggin */
`

DetailedWrap.Header = styled.header`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px ${props => props.theme.color.mainBg} solid;

  & h2{
    font-weight: 400;
    margin-top: 0;
  }

  & h3{
    font-weight: 300;
    margin: 0;
  }

  & div{
    display: flex;
    flex-flow: row nowrap;
  }
`

DetailedWrap.Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0 1rem 1rem;

  & div{
  border-bottom: 1px ${props => props.theme.color.mainBg} solid;
  padding: 1rem 0;
  }
  
  & p{
    margin-top: 0;
  }
  
  & p:last-child{
    margin-bottom:0;
  }
`

DetailedWrap.Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0 1rem 1rem;

  & div{
  border-bottom: 1px ${props => props.theme.color.mainBg} solid;
  padding: 1rem 0;
  }
  
  & p{
    margin-top: 0;
  }
  
  & p:last-child{
    margin-bottom:0;
  }
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
        <DetailedWrap>
          <DetailedWrap.Card src={cardData.imageUrlHiRes} />

          <DetailedWrap.Header>
            <h1>{cardData.name}</h1>
            <h2>{cardData.supertype} - {cardData.subtype}</h2>
            <div>
              <h3><strong>HP {cardData.hp} :</strong></h3>
              {cardData.types.map(i => {
                return <h3>{i}</h3>
              })}
            </div>
          </DetailedWrap.Header>
          
          <DetailedWrap.Content>
            {cardData.attacks.map(i => {
              return (
                <div>
                  <p><strong>{i.name}</strong> | {`Cost: ${i.cost}`} </p>
                  <p>{i.text}</p>
                </div>
              )
            })}
          </DetailedWrap.Content>    

          <DetailedWrap.Footer>
            <h4>Weaknesses</h4>
            { (cardData.weaknesses !== undefined) ? (
              
              cardData.weaknesses.map(i => {
                return (
                  <div>
                    <p><strong>{i.type}</strong> | {i.value} </p>
                    <p>{i.text}</p>
                  </div>
                )
              })

            ) : (
              <div><p>N/A</p></div>
            ) }
            
            <h4>Resistances</h4>
            { (cardData.resistances !== undefined) ? (
              
              cardData.resistances.map(i => {
                return (
                  <div>
                    <p><strong>{i.type}</strong> | {i.value} </p>
                    <p>{i.text}</p>
                  </div>
                )
              })

            ) : (
              <div><p>N/A</p></div>
            ) }

            <h4>Retreat Cost</h4>
            { (cardData.retreatCost !== undefined) ? (
              
              cardData.retreatCost.map(i => {
                return (
                  <div>
                    <p><strong>{i.type}</strong> | {i.value} </p>
                    <p>{i.text}</p>
                  </div>
                )
              })

            ) : (
              <div><p>N/A</p></div>
            ) }

          </DetailedWrap.Footer>    

        </DetailedWrap>
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
    <>
      {ShowData()}
    </>
  );
}