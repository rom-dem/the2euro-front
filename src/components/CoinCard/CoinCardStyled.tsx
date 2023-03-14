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
    }

    &__year {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
`;

export default CoinCardStyled;
