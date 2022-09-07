import styled from "styled-components";

const StyledNav = styled.nav`
  background: #2a45cd;
  height: 48px;
  color: #fff;
  padding: 0 24px;
  font-size: 24px;
  font-weight: 900;
  display: flex;
  align-items: center;
`
const Navbar = () => {
    return(
        <StyledNav>
            Track-It
        </StyledNav>
    )

}

export default Navbar;