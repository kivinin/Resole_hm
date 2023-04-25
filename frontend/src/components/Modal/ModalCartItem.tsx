import React from "react";
import { Product } from "../../json/types/Product";
import "./ModalCart.css"

function ModalCartItem({ product }: { product: Product }): JSX.Element {
  return (
    <div className="ModalCartItem">
      <img style={{width:"40px", height:"40px"}} src={`${product.product_image}`} />
      <div>{product.product_price}</div>
      <div>{product.product_name}</div>
    </div>
  );
}

export default ModalCartItem;
