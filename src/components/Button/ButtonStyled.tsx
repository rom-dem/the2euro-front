import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: ${(props) => props.theme.colour.primary};
  color: ${(props) => props.theme.colour.white};
  border-radius: ${(props) => props.theme.border.borderRadiusLarge};
  height: 60px;
  font-size: ${(props) => props.theme.fonts.textFontSizeM};

  :disabled {
    opacity: 75%;
  }
`;

export default ButtonStyled;
