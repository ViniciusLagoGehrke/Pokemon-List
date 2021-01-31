import styled from "styled-components";

const Header = styled.header`
  display:flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  min-height: 5rem;

  color: ${props => props.theme.color.contrastText};
  background-color: ${props => props.theme.color.primary};
  }
`;

export default Header;