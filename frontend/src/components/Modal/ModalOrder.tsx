import React, { useState } from 'react';
import { useAppDispatch } from '../../store';
import { postClient } from '../../json/jsonSlice';

function ModalOrder({ clickModal }: { clickModal: () => void }): JSX.Element {
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
    clickModal();
  };

  return (
    <div className="modalka">
      <form onSubmit={onHandleSubmit}>
        <h1 style={{ fontSize: '35px', marginBottom: '30px' }}>
          Отправить заявку
        </h1>
        <ul className="ulka">
          <li>Приедем в удобное время и место</li>
          <li>Оставим квитанции с подробным описанием</li>
          <li>
            После осмотра изделий технологом свяжемся с вами для согласования
            итоговой стоимости работ
          </li>
          <li>Начнём работу только после вашего согласия</li>
          <li>Отправим фото результата</li>
          <li>Доставим готовые изделия обратно</li>
        </ul>
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
          <label className="visually-hidden">adress</label>
          <input
            type="adress"
            className="form-control"
            placeholder="Адрес"
            onChange={(e) => setAdress(e.target.value)}
            value={adress}
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

export default ModalOrder;
