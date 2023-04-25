/* eslint-disable @typescript-eslint/naming-convention */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { updateServiceOrder } from './SerchOrderSlice';

function UpdateFormOrderItem(): JSX.Element {
  const { id } = useParams();
  const { service_orders } = useSelector(
    (store: RootState) => store.service_orders
  );
  const find = service_orders.filter(
    (service_order) => service_order.id === Number(id)
  );
  const [status, setStatus] = useState('');
  const [beforeImg, setBeforeImg] = useState('');
  const [afterImg, setAfterImg] = useState('');
  const [comments, setComments] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setBeforeImg(find[0]?.before_img);
    setStatus(find[0]?.status);
    setAfterImg(find[0]?.after_img);
    setComments(find[0]?.comments);
  }, [service_orders]);

  const handleUpdateServiceOrder = (
    e: React.FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();
    dispatch(
      updateServiceOrder({
        id: Number(id),
        status,
        before_img: beforeImg,
        after_img: afterImg,
        comments,
      })
    );
    navigate(-1);
  };

  return (
    <form onSubmit={handleUpdateServiceOrder} className="editform">
      <div className="mb-3">
        <label className="form-label">Статус заказа</label>
        <input
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          type="text"
          name="education"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Фотография до</label>
        <input
          value={beforeImg}
          onChange={(e) => setBeforeImg(e.target.value)}
          type="text"
          name="education"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Фотография после</label>
        <input
          value={afterImg}
          onChange={(e) => setAfterImg(e.target.value)}
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Комментарий</label>
        <input
          value={comments}
          onChange={(e) => setComments(e.target.value)}
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

export default UpdateFormOrderItem;
