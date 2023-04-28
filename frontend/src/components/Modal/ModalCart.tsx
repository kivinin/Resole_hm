import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import ModalCartItem from './ModalCartItem';
import { postOrder } from '../../json/jsonSlice';

function ModalCart({ clickModal }: { clickModal: () => void }): JSX.Element {
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
  console.log(carts);

  return (
    <div className="modalkaD">
      <form onSubmit={onHandleSubmit}>
        <h1 style={{ fontSize: '40px', marginBottom: '30px' }}>Корзина</h1>
        {carts.map((product) => (
          <ModalCartItem key={product.id} product={product} />
        ))}

        <div className="col-auto">
          <label className="visually-hidden">name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="name"
            className="form-control"
            placeholder="Имя"
          />
        </div>
        <div className="col-auto">
          <label className="visually-hidden">number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="8[0-9]{3}[0-9]{3}[0-9]{4}"
            required
            className="form-control"
            placeholder="+7-999-999-9999"
            onChange={(e) => setNumber(e.target.value)}
            value={number}
          />
        </div>
        <div className="col-auto">
          <button
            type="submit"
            className="btn btn-outline-secondary"
            style={{
              width: '400px',
              color: 'black',
              backgroundColor: '#b1fbe2',
              border: 'none',
            }}
          >
            Отправить заявку
          </button>
        </div>
        <button
          className="btn btn-outline-secondary"
          type="button"
          style={{ width: '400px' }}
          onClick={clickModal}
        >
          закрыть
        </button>
      </form>
    </div>
  );
}

export default ModalCart;
