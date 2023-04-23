import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import { postClient } from "../../json/jsonSlice";

function ModalOrder(): JSX.Element {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [adress, setAdress] = useState("");

  const dispatch = useAppDispatch();

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(postClient({ name, number, adress }));
    setName("");
    setNumber("");
    setAdress("");
  };

  return (
    <form onSubmit={onHandleSubmit} className="row g-3">
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
          type="number"
          className="form-control"
          placeholder="Мобильный телефон"
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
          className="btn btn-primary mb-3"
        >
          Confirm identity
        </button>
      </div>
    </form>
  );
}

export default ModalOrder;
