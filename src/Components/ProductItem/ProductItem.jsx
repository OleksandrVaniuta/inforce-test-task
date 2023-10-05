import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import PopupWindow from '../Modal/Modal';
import { ConfirmDelete } from '../ConfirmDeletProduct/ConfirmDeleteProduct';

import {
  ItemWrapper,
  ItemtitleWrapper,
  Itemtitle,
  LearnMoreBtn,
  DltBtn,
} from './ProductItem.styled';

import { FiTrash2 } from 'react-icons/fi';

export const Product = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const handleOpenMpdal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ItemWrapper>
      <DltBtn type="button" onClick={handleOpenMpdal}>
        <FiTrash2 size={24} style={{ color: '#000' }} />
      </DltBtn>
      <img src={data.imageUrl} alt="product" />
      <ItemtitleWrapper>
        <Itemtitle>{data.name}</Itemtitle>
        <Itemtitle>count: {data.count}</Itemtitle>
      </ItemtitleWrapper>
      <LearnMoreBtn to={`/${data.id}`} state={{ from: location }}>
        Learn more
      </LearnMoreBtn>
      {isModalOpen && (
        <PopupWindow
          closeModal={closeModal}
          title={'Delete Item'}
          isModalOpen={isModalOpen}
        >
          <ConfirmDelete id={data.id} closeModal={closeModal} />
        </PopupWindow>
      )}
    </ItemWrapper>
  );
};
