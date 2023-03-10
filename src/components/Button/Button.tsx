interface ButtonProps {
  text: string;
  isDisabled: boolean;
}

const Button = ({ isDisabled, text }: ButtonProps): JSX.Element => {
  return <button disabled={isDisabled}>{text}</button>;
};

export default Button;
