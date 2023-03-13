import styled from "styled-components";

const NavigationStyled = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 10px 20px 5px 20px;
  margin-left: -20px;

  svg {
    height: 48px;
    width: 48px;
  }
  .active {
    border-bottom: 5px solid;
  }
`;

export default NavigationStyled;
