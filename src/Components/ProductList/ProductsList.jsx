import { ListWrapper } from './ProductList.styled';

import { Product } from '../ProductItem/ProductItem';

export const ProductList = ({ data }) => {
  console.log(data);
  return (
    <div>
      <ListWrapper>
        {data.map((dataItem) => (
          <Product key={data.id + Math.random().toString()} data={dataItem} />
        ))}
      </ListWrapper>
    </div>
  );
};
