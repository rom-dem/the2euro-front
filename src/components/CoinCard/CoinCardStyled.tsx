import styled from "styled-components";

const CoinCardStyled = styled.article`
  display: flex;
  min-width: 100%;
  justify-content: space-between;

  .card {
    &__details {
      display: flex;
      flex-direction: column;
      flex: 2;
      padding-left: 10px;
      justify-content: space-evenly;
    }

    &__country {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-size: ${(props) => props.theme.fonts.textFontSizeL};
    }

    &__year {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-size: ${(props) => props.theme.fonts.textFontSizeM};
    }

    &__image-container {
      height: 120px;
      width: 120px;
      border-radius: 50%;
      overflow: hidden;
    }

    &__image {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    &__buttons {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
  }

  button {
    height: 48px;
    width: 48px;
    display: flex;
    align-items: center;
  }
`;

export default CoinCardStyled;
