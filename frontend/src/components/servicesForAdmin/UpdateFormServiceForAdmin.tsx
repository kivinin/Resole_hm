import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { updateService } from '../../json/jsonSlice';

function UpdateFormServiceForAdmin(): JSX.Element {
  const { id } = useParams();
  const { services } = useSelector((store: RootState) => store.service);
  const find = services.filter((item) => item.id === Number(id));

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setName(find[0]?.service_name);
    setPrice(find[0]?.price);
    setDescription(find[0]?.service_description);
    setImage(find[0]?.service_image);
  }, [services]);

  const handleUpdateService = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(
      updateService({
        id: Number(id),
        service_name: name,
        service_description: description,
        service_image: image,
        price,
      })
    );
    navigate(-1);
  };

  return (
    <form onSubmit={handleUpdateService} className="editform">
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

export default UpdateFormServiceForAdmin;
