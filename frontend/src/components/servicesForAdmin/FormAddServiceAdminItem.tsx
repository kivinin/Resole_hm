import React, { useState } from 'react';
import { useAppDispatch } from '../../store';
import { addNewService } from '../../json/jsonSlice';

function FormAddServiceAdminItem(): JSX.Element {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const dispatch = useAppDispatch();

  const handleAddUser = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(
      addNewService({
        service_name: name,
        price,
        service_image: image,
        service_description: description,
      })
    );
    setName('');
    setPrice('');
    setDescription('');
    setImage('');
  };

  return (
    <form className="editform" onSubmit={handleAddUser}>
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

export default FormAddServiceAdminItem;
