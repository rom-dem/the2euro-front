import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text?: string;
  isDisabled?: boolean;
  icon?: JSX.Element;
  buttonName?: string;
  onClick?: () => void;
}

const Button = ({
  text,
  isDisabled = false,
  icon,
  buttonName,
  onClick,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled
      disabled={isDisabled}
      onClick={onClick}
      aria-label={buttonName}
    >
      {text}
      {icon}
    </ButtonStyled>
  );
};

export default Button;
