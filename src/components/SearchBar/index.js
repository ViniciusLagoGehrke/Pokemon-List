import React from 'react';
import styled from "styled-components";

const SearchWrapper = styled.div`
  grid-row-start: row1-start;
  grid-row-end: row1-end;
  width: 20rem;
  background-color: ${props => props.theme.color.mainBg};
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.color.third};
  
  & input{
    border-radius: ${props => props.theme.borderRadius};
    border: none;
    padding: 0.5rem;

    &:focus{
      outline:none;
    }
  }

  & button{
    /* position: absolute; */
  }
`;

const SearchBar = (props) => {
  return (
    <SearchWrapper>
      <input
        type="text"
        key="SearchBar"
        placeholder={"Search Pokemon by name"}
        onChange={props.onChange}
      />
      <button
        onClick={props.onClick}>Search</button>
    </SearchWrapper>
  );
}

export default SearchBar;