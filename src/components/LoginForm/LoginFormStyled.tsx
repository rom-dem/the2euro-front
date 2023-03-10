import styled from "styled-components";

const LoginFormStyled = styled.form`
  font-family: ${(props) => props.theme.fonts.text};
  color: #303030;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .form {
    &__pill {
      background-color: ${(props) => props.theme.colour.gray};
      padding: 8px 16px;
      border-radius: ${(props) => props.theme.border.borderRadiusSmall};
    }

    &__label {
      display: flex;
      flex-direction: column;
      gap: 5px;
      min-height: 22px;
      font-size: ${(props) => props.theme.fonts.textFontSizeS};
    }

    &__input {
      min-height: 25px;
      font-size: ${(props) => props.theme.fonts.textFontSizeM};
    }
  }
`;

export default LoginFormStyled;
