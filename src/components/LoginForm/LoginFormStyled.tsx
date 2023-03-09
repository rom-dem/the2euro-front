import styled from "styled-components";

const LoginFormStyled = styled.form`
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
    }

    &__input {
      min-height: 25px;
    }
  }
`;

export default LoginFormStyled;
