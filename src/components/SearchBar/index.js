import React from 'react';
import styled from "styled-components";

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 18rem;
  margin: 1rem;
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.color.third};
  
  & input{
    flex: 2 1 auto;
    border-radius: ${props => props.theme.borderRadius} 0 0 ${props => props.theme.borderRadius};
    border: none;
    outline: none;
    padding: 0.5rem;
    
    &:focus{
      outline:none;
    }
  }

  & button{
    flex: 1 1 auto;
    cursor: pointer;
    height: 32px;
    text-align: center;
    font-weight: bold;
    border: none;
    outline: none;
    border-radius: 0 10px 10px 0;
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
        onClick={props.onClick}
      >
        Search
      </button>
    </SearchWrapper>
  );
}

export default SearchBar;