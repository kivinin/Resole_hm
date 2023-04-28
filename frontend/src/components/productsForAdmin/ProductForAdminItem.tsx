import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { removeProduct } from '../../json/jsonSlice';

function ProductForAdminItem({
  product,
}: {
  product: {
    id: number;
    product_name: string;
    product_price: string;
    product_description: string;
    product_image: string;
  };
}): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const routUpd = (): void => {
    navigate(`/product/edit/${product.id}`);
  };

  return (
    <tr>
      <th scope="row">{product.id}</th>
      <td>{product.product_name}</td>
      <td>{product.product_price} ₽</td>
      <td style={{ width: '70px', height: '70px' }}>
        {product.product_description}
      </td>
      <img
        src={product.product_image}
        alt="___"
        style={{ width: '70px', height: '70px' }}
      />
      <td>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => dispatch(removeProduct(product.id))}
        >
          Удалить
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={routUpd}
        >
          Изменить
        </button>
      </td>
    </tr>
  );
}

export default ProductForAdminItem;
