import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import _ from 'lodash';
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'

import { loadCards } from '../../actions/cardActions'

import ListItem from '../ListItem'
import SearchBar from '../SearchBar';

const Main = styled.main`
  display: flex;
  flex-flow: column wrap;
  padding: 2rem 0;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.color.mainBg};

  & .pagination{
    cursor: pointer;
    display: flex;
    width: 90%;
    margin: auto;
    list-style: none;
    justify-content: space-between;
    padding: 0;
  }
`;

const ListWrapper = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(220px, 245px));
  grid-gap: 2rem;
  justify-content: center;

  padding: 2rem;
  background-color: ${props => props.theme.color.mainBg};
  }
`;


export default function List (props) {
  const [input, setInput] = useState('');
  const [pokedex, setPokedex] = useState([]);
  
  const updateInput = (input) => {
    const filtered = cardList.filter(card => {
      return card.name.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input);
    setPokedex(filtered);
  }

  const dispatch = useDispatch();
  const cardList = useSelector(state => state.CardList.data)
  const response = useSelector(state => state.CardList)
  
  //DEBUGGING!!!!!
  console.log('response: ')
  console.log(response)
  console.log('pokedex: ')
  console.log(pokedex)
  console.log('cardList: ')
  console.log(cardList)

  useEffect(() => {
    fetchData(1)
    setPokedex(cardList)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const fetchData = (page = 1) => {
    dispatch(loadCards(page))
  }

  const ShowData = () => {
    if(cardList.loading) {
      return <p>Loading...</p>
    }

    if(!_.isEmpty(cardList)) {
      return (
        <>
          {cardList.map(card => {
            return(
              <Link to={`/cards/${card.id}`} >
                <ListItem
                  key={`Card:${card.id}`}
                  pokeCard={card}
                />
              </Link>
            )
          })}
        </>
      )
    }

    if(cardList.errorMsg !== "") {
      return <p>{cardList.errorMsg}</p>
    }

    return <p>unable to get data</p>
  }
  
  return(
    <Main>
      <SearchBar
        keyword={input}
        setKeyword={updateInput}
      />
      {!_.isEmpty(cardList) && (
          <ReactPaginate
            pageCount={50}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            onPageChange={(data) => fetchData(data.selected + 1)}
            containerClassName={'pagination'}
          />
      )}
      <ListWrapper>
        {ShowData()}
      </ListWrapper>
    </Main>
  );
};