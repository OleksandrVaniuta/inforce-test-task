import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { data } from '../../redux/Products/ProductSelectors';
import { getAllProducts } from '../../redux/Products/ProductsOperation';

import { ProductList } from '../../Components/ProductList/ProductsList';
import { CreateProductFrom } from '../../Components/CreateProductForm/CreateProductFoem';
import PopupWindow from '../../Components/Modal/Modal';

import filtredData from '../../helpers/filtrData';
import { CreateButton } from '../../Components/CreatProdutBtn/CreateProductBtn';

import { Container } from './ListPage.styled';

const ProductsList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const productsData = useSelector(data);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const handleOpenMpdal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const filtredProductData = filtredData.sortData(productsData);

  return (
    <Container>
      <CreateButton handleClick={handleOpenMpdal} />
      {productsData.length > 0 && <ProductList data={filtredProductData} />}
      {isModalOpen && (
        <PopupWindow
          closeModal={closeModal}
          title={'Delete Item'}
          isModalOpen={isModalOpen}
        >
          <CreateProductFrom closeModal={closeModal} />
        </PopupWindow>
      )}
    </Container>
  );
};

export default ProductsList;
