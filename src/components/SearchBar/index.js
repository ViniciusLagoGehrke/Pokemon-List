import React from 'react';
import styled from "styled-components";

const SearchWrapper = styled.input`
  width: 20rem;
  background-color: ${props => props.theme.color.mainBg};
  border: none;
  padding: 0.5rem;
`;

const SearchBar = ({keyword,setKeyword}) => {
  return (
    <SearchWrapper 
     key="SearchBar"
     value={keyword}
     placeholder={"Search Pokemon by name"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar;