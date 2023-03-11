import LoadingStyled from "./LoadingStyled";

const Loading = (): JSX.Element => {
  return (
    <LoadingStyled
      className="loader"
      aria-label="Loading"
      role="status"
    ></LoadingStyled>
  );
};

export default Loading;
