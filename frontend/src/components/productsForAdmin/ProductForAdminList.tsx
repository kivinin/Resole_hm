import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import ProductForAdminItem from './ProductForAdminItem';
import FormAddForAdminItem from './FormAddForAdminItem';

function ProductForAdminList(): JSX.Element {
  const { products } = useSelector((store: RootState) => store.products);
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Название продукта</th>
            <th scope="col">Стоимость</th>
            <th scope="col">Описание</th>
            <th scope="col">Фотография</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductForAdminItem key={product.id} product={product} />
          ))}
        </tbody>
      </table>
      <FormAddForAdminItem />
    </>
  );
}

export default ProductForAdminList;
