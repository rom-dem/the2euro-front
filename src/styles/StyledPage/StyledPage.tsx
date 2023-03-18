import styled from "styled-components";

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${(props) => props.theme.fonts.text};
  min-height: 100vh;
  max-width: 100%;
  justify-content: flex-start;
  position: relative;

  .page {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__title {
      font-family: ${(props) => props.theme.fonts.title};
      font-size: ${(props) => props.theme.fonts.titleFontSizeS};
      padding-top: 50px;
      padding-bottom: 15px;
      display: table-cell;
      vertical-align: bottom;
      align-self: center;
    }
  }
`;

export default StyledPage;
