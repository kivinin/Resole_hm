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
    <div className="cardM">
      <div className="closeModal">
        <button onClick={clickModal} className="buttonCloseModal">
          <img src="close.svg" />
        </button>
      </div>
      <h2 className="card-title cartSize">Корзина</h2>

      {carts.map((product) => (
        <ModalCartItem key={product.id} product={product} />
      ))}

      <form
        onSubmit={onHandleSubmit}
        className="row g-3"
        style={{ margin: '50px 0 0 0' }}
      >
        <div className="formBuy">
          <div className="col-auto">
            <label className="visually-hidden">Имя</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="form-control"
              placeholder="Имя"
              required
            />
          </div>
          <div className="col-auto">
            <label className="visually-hidden">Номер телефона</label>
            <input
              className="form-control"
              placeholder="+7(999)-999-99-99"
              onChange={(e) => setNumber(e.target.value)}
              value={number}
              required
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-dark mb-3 butHover">
              Сделать заказ
            </button>
          </div>
        </div>
        <div
          style={{
            margin: '0 0 0 100px',
            width: '400px',
            fontSize: '10px',
            fontWeight: '700',
          }}
        >
          Нажимая кнопку «Отправить», я даю свое согласие на обработку моих
          персональных данных, в соответствии с Федеральным законом от
          27.07.2006 года №152-ФЗ «О персональных данных», на условиях и для
          целей, определенных в Согласии на обработку персональных данных
        </div>
      </form>
    </div>
  );
}

export default ModalCart;
