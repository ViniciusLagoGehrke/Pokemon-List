import React, { useState } from 'react';
import styled from "styled-components";

const SearchWrapper = styled.input`
  min-width: 18rem;
  margin: 1rem;
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.color.third};
  padding: 0.5rem;   

  &:focus{
    outline:none;
  }
`;

const SearchBar = ({keyword, setKeyword}) => {  
  return (
    <SearchWrapper
      type="text"
      key="SearchBar"
      value={keyword}
      placeholder={"Search Pokemon by name"}
      onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar;

