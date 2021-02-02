import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import _ from 'lodash';
import { Link } from 'react-router-dom'

import { loadCards } from '../../actions/cardActions'

import ListItem from '../ListItem'
import SearchBar from '../SearchBar';

const ListWrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 245px));
  grid-template-rows: [row1-start] 22rem [row1-end] repeat(auto-fit, minmax(220px, 346px));
  grid-gap: 2rem;
  justify-content: center;

  padding: 2rem;
  background-color: ${props => props.theme.color.mainBg};
  }
`;

export default function List (props) {
  const [search, setSearch] = useState('');
  // const [pokedex, setPokedex] = useState([]);
  // const [pokedexDefault, setPokedexDefault] = useState([]);
  
  // const updateInput = (input) => {
  //   const filtered = pokedexDefault.filter(card => {
  //     return card.name.toLowerCase().includes(input.toLowerCase())
  //   })
  //   setInput(input);
  //   setPokedex(filtered);
  // }

  const dispatch = useDispatch();
  const cardList = useSelector(state => state.CardList.data)

  useEffect(() => {
    fetchData(1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const fetchData = (page = 1) => {
    dispatch(loadCards(page))
  }

  const ShowData = () => {
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

    if(cardList.loading) {
      return <p>Loading...</p>
    }

    if(cardList.errorMsg !== "") {
      return <p>{cardList.errorMsg}</p>
    }

    return <p>unable to get data</p>
  }
  
  return(
    <ListWrapper>
      <SearchBar
        onChange={(e) => setSearch(e.target.value)}
        onClick={() => props.history.push(`/cards?name=${search}`)}
      />
      {ShowData()}
    </ListWrapper>
  );
};