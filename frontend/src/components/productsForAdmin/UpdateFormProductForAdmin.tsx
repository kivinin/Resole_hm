import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { updateProduct } from '../../json/jsonSlice';

function UpdateFormProductForAdmin(): JSX.Element {
  const { id } = useParams();
  const { products } = useSelector((store: RootState) => store.products);
  const find = products.filter((item) => item.id === Number(id));

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setName(find[0]?.product_name);
    setPrice(find[0]?.product_price);
    setDescription(find[0]?.product_description);
    setImage(find[0]?.product_image);
  }, [products]);

  const handleUpdateProduct = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(
      updateProduct({
        id: Number(id),
        product_name: name,
        product_description: description,
        product_image: image,
        product_price: price,
      })
    );
    navigate(-1);
  };
  return (
    <form className="editform" onSubmit={handleUpdateProduct}>
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

export default UpdateFormProductForAdmin;
