import { Button } from '../ConfirmationButton/ConfirmationButton';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../redux/Products/ProductsOperation';

import { ButtonWrapper } from './ConfirmDeleteProduct.styled';
export const ConfirmDelete = ({ id, closeModal }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    await dispatch(deleteProduct(id));
    closeModal();
  };

  return (
    <div>
      <h3>Are you sure you want to remove the product?</h3>
      <ButtonWrapper>
        <Button type={'button'} text={'Yes'} handleClick={handleDelete} />
        <Button type={'button'} text={'Cancel'} handleClick={closeModal} />
      </ButtonWrapper>
    </div>
  );
};
