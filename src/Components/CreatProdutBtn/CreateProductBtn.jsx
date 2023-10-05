import { CreateBtn } from './CreateBtn.styled';

export const CreateButton = ({ handleClick }) => {
  return (
    <CreateBtn type="buttom" onClick={handleClick}>
      Create Product
    </CreateBtn>
  );
};
