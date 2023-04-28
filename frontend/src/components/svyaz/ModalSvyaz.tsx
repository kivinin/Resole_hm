import React, { useState } from 'react';
import { useAppDispatch } from '../../store';
import { postClient } from '../../json/jsonSlice';
import './ModalCart.css';

function ModalSvyaz(): JSX.Element {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [adress, setAdress] = useState('');

  const dispatch = useAppDispatch();

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(postClient({ name, number, adress }));
    setName('');
    setNumber('');
    setAdress('');
  };

  return (
    <div className="modalkaSvyaz">
      <form onSubmit={onHandleSubmit}>
        <h1 style={{ fontSize: '30px', marginBottom: '30px' }}>
          Бесплатная консультация
        </h1>
        <div className="col-auto" style={{ width: '400px' }}>
          <label className="visually-hidden">name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="name"
            className="form-control"
            placeholder="Имя"
            style={{ width: '380px' }}
          />
        </div>
        <div className="col-auto" style={{ width: '400px' }}>
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
            style={{ width: '380px' }}
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
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ width: '270px', color: 'black', fontSize: '12px' }}>
          Нажимая кнопку «Отправить», я даю свое согласие на обработку моих
          персональных данных, в соответствии с Федеральным законом от
          27.07.2006 года №152-ФЗ «О персональных данных», на условиях и для
          целей, определенных в Согласии на обработку персональных данных
        </div>
        </div>
      </form>
    </div>
  );
}

export default ModalSvyaz;
