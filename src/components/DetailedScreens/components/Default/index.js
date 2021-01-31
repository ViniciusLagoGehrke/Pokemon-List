import React from 'react';
import styled from "styled-components";

const DetailedWrap = styled.article`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 10;

  display: flex;
  flex-flow: column nowrap;
  color: black;
  background-color: ${props => props.theme.color.secondBg};
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.color.secondary};
  width: 500px;
  max-width: 80%;

  transition: 200ms ease-in-out;

  ${props => {
    if(props.activeDetail === props.id) {
      return`
        transform: translate(-50%, -50%) scale(1);
      `;
    } return `
        transform: translate(-50%, -50%) scale(0);
      `;
  }}
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

const DetailedScreen = ({keyword,setKeyword}) => {
  return (
    <DetailedWrap>
      <DetailedWrap.Header>
      </DetailedWrap.Header>
      <DetailedWrap.Content>
      </DetailedWrap.Content>
    </DetailedWrap>
  );
}

export default DetailedScreen;