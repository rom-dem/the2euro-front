import styled from "styled-components";
import StyledPage from "../../styles/StyledPage/StyledPage";

const NotFoundPageStyled = styled(StyledPage)`
  padding: 20px;
  justify-content: center;
  position: relative;
  align-items: center;
  gap: 25px;

  svg {
    max-height: 280px;
    max-width: 280px;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
    object-position: center;
  }

  button {
    min-width: 280px;
  }

  .title {
    font-family: ${(props) => props.theme.fonts.title};
  }
`;

export default NotFoundPageStyled;
