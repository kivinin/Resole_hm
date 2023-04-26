import React, { useState } from 'react';
import { useAppDispatch } from '../../store';
import { addNewProducts } from '../../json/jsonSlice';

function FormAddForAdminItem(): JSX.Element {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const dispatch = useAppDispatch();

  const handleAddProduct = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(
      addNewProducts({
        product_name: name,
        product_price: price,
        product_image: image,
        product_description: description,
      })
    );
    setName('');
    setPrice('');
    setDescription('');
    setImage('');
  };

  return (
    <form className="editform" onSubmit={handleAddProduct}>
      <div className="mb-3">
        <label className="form-label">Название сервиса заказа</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="education"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Стоимость</label>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="text"
          name="education"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Описание</label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Фотография</label>
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="text"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default FormAddForAdminItem;
