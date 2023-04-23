import React, { useState } from "react";
import { useAppDispatch } from "../../store";
import { addCart } from "../../json/jsonSlice";
import { Product } from "../../json/types/Product";

function ProductItem({
  product,
}: {
  product: Product
}): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>{product.product_name}</h2>
      <h2>{product.product_price}</h2>
      <h2>{product.product_description}</h2>
      <div>
        <img src={`${product.product_image}`} />
      </div>
      <button onClick={() => dispatch(addCart(product.id))} type="button">
        в корзину
      </button>
    </div>
  );
}

export default ProductItem;
