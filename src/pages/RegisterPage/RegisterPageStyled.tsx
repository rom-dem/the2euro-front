import styled from "styled-components";

const RegisterPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${(props) => props.theme.fonts.text};
  gap: 20px;

  .login-page {
    &__logo {
      align-self: center;
      width: 64px;
      height: 64px;
      border: 1px solid ${(props) => props.theme.colour.primary};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__title {
      font-family: ${(props) => props.theme.fonts.title};
      font-size: ${(props) => props.theme.fonts.titleFontSizeM};
      text-transform: uppercase;
    }
  }

  .register {
    display: flex;
    gap: 5px;
    justify-content: center;

    &__link {
      text-transform: uppercase;
      font-weight: 700;
    }
  }
`;

export default RegisterPageStyled;
