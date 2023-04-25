import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import ModalCartItem from './ModalCartItem';
import { postOrder } from '../../json/jsonSlice';

function ModalCart(): JSX.Element {
  const { carts } = useSelector((store: RootState) => store.carts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useAppDispatch();

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(postOrder({ name, number, carts }));
    setName('');
    setNumber('');
  };

  return (
    <div className="card">
      <h5 className="card-title">Корзина</h5>
      {carts.map((product) => (
        <ModalCartItem key={product.id} product={product} />
      ))}

      <form onSubmit={onHandleSubmit} className="row g-3">
        <div className="col-auto">
          <label className="visually-hidden">name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="form-control"
            placeholder="name"
            required
          />
        </div>
        <div className="col-auto">
          <label className="visually-hidden">number</label>
          <input
            className="form-control"
            placeholder="number"
            onChange={(e) => setNumber(e.target.value)}
            value={number}
            required
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Купить
          </button>
        </div>
      </form>
    </div>
  );
}

export default ModalCart;
