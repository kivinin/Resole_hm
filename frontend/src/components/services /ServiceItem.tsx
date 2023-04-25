import React, { useState } from 'react';
import styles from './styles/services.module.scss';
import ModalOrder from '../Modal/ModalOrder';

function ServiceItem({
  service,
}: {
  service: {
    id: number;
    service_name: string;
    price: string;
    service_description: string;
    service_image: string;
  };
}): JSX.Element {
  const [zayavka, setZayavka] = useState(false);
  const clickModal = (): void => {
    setZayavka((prev) => !prev);
  };
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {!zayavka ? (
        <div className={styles.service__item} style={{ width: '21rem' }}>
          <img
            src={`${service.service_image}`}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{service.service_name}</h5>
            <h3>{service.price}</h3>
            <p className="card-text">{service.service_description}</p>
          </div>
          <button type="button" onClick={clickModal}>
            Отправить заявку
          </button>
        </div>
      ) : (
        <>
          <div className={styles.service__item} style={{ width: '21rem' }}>
            <img
              src={`${service.service_image}`}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{service.service_name}</h5>
              <h3>{service.price}</h3>
              <p className="card-text">{service.service_description}</p>
            </div>
            <button type="button" onClick={clickModal}>
              Отправить заявку
            </button>
          </div>
          <ModalOrder clickModal={clickModal} />
        </>
      )}
    </>
  );
}

export default ServiceItem;
