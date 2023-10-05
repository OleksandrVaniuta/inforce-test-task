import { ConfirmationButton } from './ConfirmationButton.styled';

export const Button = ({ type, handleClick, text }) => {
  return (
    <ConfirmationButton type={type} onClick={handleClick}>
      {text}
    </ConfirmationButton>
  );
};
