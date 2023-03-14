import styled from "styled-components";

const CoinsListStyled = styled.ul`
  min-width: 100%;
  .list {
    &__item {
      padding-bottom: 10px;
    }

    &__border {
      height: 2px;
      border: 2px solid ${(props) => props.theme.colour.gray};
      border-radius: 10px;
      margin-top: 10px;
    }
  }
`;

export default CoinsListStyled;
