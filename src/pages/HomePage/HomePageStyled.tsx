import styled from "styled-components";

const HomePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${(props) => props.theme.fonts.text};
  min-height: 90vh;
  justify-content: space-between;

  .page {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__title {
      font-family: ${(props) => props.theme.fonts.title};
      font-size: ${(props) => props.theme.fonts.titleFontSizeS};
      padding-top: 50px;
      display: table-cell;
      vertical-align: bottom;
      align-self: center;
    }
  }
`;

export default HomePageStyled;
