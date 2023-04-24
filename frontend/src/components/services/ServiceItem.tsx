import React from 'react';
import styles from './styles/services.module.scss';

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
  return (
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
    </div>
  );
}

export default ServiceItem;

// <div>
//   <h2>{service.service_name}</h2>
//   <h2>{service.price}</h2>
//   <h2>{service.service_description}</h2>
//   <div>
//     <img src={`${service.service_image}`} />
//   </div>
// </div>
