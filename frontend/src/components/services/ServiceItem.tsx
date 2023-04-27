import React, { useState } from 'react';
// import styles from './styles/services.module.scss';
import ModalOrder from '../Modal/ModalOrder';
import './styles/style.css';

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
        <article className="card" style={{ width: '385px' }}>
          <img
            className="card__background"
            src={`${service.service_image}`}
            alt="Pho"
            height="2193"
            style={{ width: '385px' }}
          />
          <div className="card__content | flow">
            <div className="card__content--container | flow">
              <h2 className="card__title">{service.service_name}</h2>
              <p className="card__description">{service.service_description}</p>
              <p className="card__description">{service.price}₽</p>
            </div>
            <button type="button" className="card__button" onClick={clickModal}>
              Заказать услугу
            </button>
          </div>
        </article>
      ) : (
        <>
          <article className="card">
            <img
              className="card__background"
              src={`${service.service_image}`}
              alt="Pho"
              width="1920"
              height="2193"
            />
            <div className="card__content | flow">
              <div className="card__content--container | flow">
                <h2 className="card__title">{service.service_name}</h2>
                <p className="card__description">
                  {service.service_description}
                </p>
                <p className="card__description">{service.price}</p>
              </div>
              <button
                type="button"
                className="card__button"
                onClick={clickModal}
              >
                Заказать услугу
              </button>
            </div>
          </article>
          <ModalOrder clickModal={clickModal} />
        </>
      )}
    </>
  );
}

export default ServiceItem;
