import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import ModalCartItem from "./ModalCartItem";

function ModalCart(): JSX.Element {
  const { carts } = useSelector((store: RootState) => store.carts);
  return (
    <div className="card">
      <h5 className="card-title">Корзина</h5>
      {carts.map((product) => (
        <ModalCartItem key={product.id} product={product} />
      ))}
      <button type="button" className="btn btn-secondary">купить</button>
    </div>
  );
}

export default ModalCart;
