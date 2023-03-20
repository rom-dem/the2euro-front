import styled from "styled-components";

const CoinCardDetailStyled = styled.article`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  justify-content: space-between;

  .card {
    &__details {
      display: flex;
      flex-direction: column;
      flex: 2;
      padding-left: 10px;
      justify-content: space-evenly;
      padding-bottom: 15px;
    }

    &__year {
      font-size: ${(props) => props.theme.fonts.textFontSizeXL};
    }

    &__country {
      font-size: ${(props) => props.theme.fonts.textFontSizeXXL};
      padding: 15px 0 25px 0;
    }

    &__volume,
    &__feature {
      font-size: ${(props) => props.theme.fonts.textFontSizeM};
      padding-bottom: 15px;
    }

    &__image-container {
      display: flex;
      margin: auto;
      max-height: 320px;
      max-width: 320px;
      border-radius: 50%;
      overflow: hidden;
    }

    &__image {
      object-fit: cover;
      width: 100%;
      height: 100%;
      display: block;
      margin: auto;
    }

    &__buttons {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    &__strong {
      font-weight: 700;
    }
  }

  button {
    height: 48px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: center;
    gap: 15px;
  }
`;

export default CoinCardDetailStyled;
