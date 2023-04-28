import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { ServiceOrder } from '../SerchOrder/types/types';
import { postOrder } from '../../json/jsonSlice';
import './ModalCart.css';

function ModalSearchOrder({
  clickModall,
}: {
  clickModall: () => void;
}): JSX.Element {
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
  const userOrder = useSelector(
    (store: RootState) => store.service_orders.service_orders
  );
  const [input, setInput] = useState('');
  const [resSearch, setResSearch] = useState<ServiceOrder[]>();

  const search = (): void => {
    if (input.length > 0) {
      const a = userOrder.filter((el) =>
        el.unique_key.toLowerCase().includes(input.toLowerCase())
      );
      setResSearch(a);
    }
  };
  return (
    <div className="modalCheck">
      <form onSubmit={onHandleSubmit}>
        <h1 style={{ fontSize: '40px', marginBottom: '30px' }}>
          ПРОВЕРИТЬ ЗАКАЗ
        </h1>
        <div className="col-auto">
          <label className="visually-hidden">Ваш заказ:</label>
          <input
            id="phone"
            name="phone"
            required
            className="form-control"
            placeholder="Ваш заказ"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </div>
        <div className="col-auto">
          {resSearch?.length &&
            resSearch.map((el) => (
              <div
                style={{
                  border: '1px solid',
                  padding: '10px',
                  margin: '10px',
                  borderRadius: '20px',
                }}
              >
                <img
                  alt=""
                  src={el.before_img}
                  className="card-img-top"
                  style={{ maxWidth: '240px', margin: '0 20px 0 0' }}
                />
                <img
                  alt=""
                  src={el.after_img}
                  className="card-img-top"
                  style={{ maxWidth: '240px' }}
                />
                <p style={{ color: 'black' }}>Статус заказа: {el.status}</p>
                <p style={{ color: 'black' }}>
                  Комментарий мастера: {el.comments}
                </p>
              </div>
            ))}
          <button
            type="submit"
            className="btn btn-outline-secondary"
            style={{
              width: '400px',
              color: 'black',
              backgroundColor: '#b1fbe2',
              border: 'none',
            }}
            onClick={search}
          >
            Отправить заявку
          </button>
        </div>
        <button
          className="btn btn-outline-secondary"
          type="button"
          style={{ width: '400px' }}
          onClick={clickModall}
        >
          закрыть
        </button>
      </form>
    </div>
  );
}

export default ModalSearchOrder;
