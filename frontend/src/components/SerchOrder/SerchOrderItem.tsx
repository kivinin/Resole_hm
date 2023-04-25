import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { removeServiceOrder } from './SerchOrderSlice';

function SerchOrderItem({
  service_order,
}: {
  service_order: {
    id: number;
    client_id: number;
    service_id: number;
    status: string;
    unique_key: string;
    before_img: string;
    after_img: string;
    comments: string;
    Client: {
      id: number;
      name: string;
      number: string;
      adress: string;
    };
  };
}): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const routUpd = (): void => {
    navigate(`/serviceorders/edit/${service_order.id}`);
  };

  return (
    <tr>
      <th scope="row">{service_order.id}</th>
      <td>{service_order.status}</td>
      <td>{service_order.Client.name}</td>
      <td>{service_order.Client.number}</td>
      <td>{service_order.Client.adress}</td>
      <td>{service_order.comments}</td>
      <td>
        <img
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          src={service_order.before_img}
          alt="___"
          style={{ width: '70px', height: '70px' }}
        />
      </td>

      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Фотография до
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <img
                src={`${service_order.before_img}`}
                alt="..."
                className="img-fluid"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <td>
        <img
          data-bs-toggle="modal"
          data-bs-target="#exampleModal2"
          src={service_order.after_img}
          alt="___"
          style={{ width: '70px', height: '70px' }}
        />
      </td>
      <div
        className="modal fade"
        id="exampleModal2"
        aria-labelledby="exampleModalLabel2"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel2">
                Фотография после
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <img
                src={`${service_order.after_img}`}
                alt="..."
                className="img-fluid"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-outline-danger"
        onClick={() => dispatch(removeServiceOrder(service_order.id))}
      >
        Удалить
      </button>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={routUpd}
      >
        Изменить
      </button>
    </tr>
  );
}

export default SerchOrderItem;
