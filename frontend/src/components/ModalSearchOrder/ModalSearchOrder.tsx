import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ServiceOrder } from '../SerchOrder/types/types';

function ModalSearchOrder(): JSX.Element {
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
    <>
      <button
        type="button"
        className="btn btn-outline-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >
        Проверить статус заказа
      </button>
      <div
        className="modal fade"
        style={{ top: '200px' }}
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Модалка
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                .
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="col-form-label">Ваш заказ:</label>
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="form-control"
                    id="recipient-name"
                  />
                </div>
              </form>
            </div>
            {resSearch?.length &&
              resSearch.map((el) => (
                <div>
                  <p>Статус заказа: {el.status}</p>
                  <img
                    alt=""
                    src={el.before_img}
                    className="card-img-top"
                    style={{ maxWidth: '240px' }}
                  />
                  <img
                    alt=""
                    src={el.after_img}
                    className="card-img-top"
                    style={{ maxWidth: '240px' }}
                  />
                  <p>Комментарий и мастера: {el.comments}</p>
                </div>
              ))}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Закрыть
              </button>
              <button
                onClick={search}
                type="button"
                className="btn btn-primary"
              >
                Проверить
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalSearchOrder;
