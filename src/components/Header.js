import { NavLink } from "react-router-dom";
import styled from "styled-components";
import './style.css'

function Header() {
  return (
    <Wrapper>
      <nav>
        <StyledLink exact to="/">
          Home
        </StyledLink>
        <StyledLink exact to="/new">
          Regester
        </StyledLink>
      </nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 16px 32px;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.15), 
              0px 4px 8px rgba(0,0,0,0.15), 
              0px 8px 16px rgba(0,0,0,0.15), 
              0px 16px 32px rgba(0,0,0,0.15);
    justify-content: space-between;
`;



const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #000;
  font-weight: bold;
  font-size: 1.25rem;
  margin: 8px;
  padding: 8px;

  &.active {
    border-bottom: 3px solid;
  }
`;

export default Header;
