import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import SerchOrderItem from './SerchOrderItem';
import ServicesForAdminList from '../servicesForAdmin/ServicesForAdminList';
import ProductForAdminList from '../productsForAdmin/ProductForAdminList';

function SerchOrderList(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { service_orders } = useSelector(
    (store: RootState) => store.service_orders
  );
  return (
    <>
      <br></br>
      <br></br>
      <p className="fs-1 fw-bold" style={{ color: 'black' }}>
        ЗАКАЗЫ
      </p>
      <br></br>
      <br></br>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Статус</th>
            <th scope="col">Имя</th>
            <th scope="col">Номер телефона</th>
            <th scope="col">Адрес</th>
            <th scope="col">Комментарий</th>
            <th scope="col">Фотография до</th>
            <th scope="col">Фотография после</th>
          </tr>
        </thead>
        <tbody>
          {service_orders.map((service_order) => (
            <SerchOrderItem
              key={service_order.id}
              service_order={service_order}
            />
          ))}
        </tbody>
      </table>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p className="fs-1 fw-bold" style={{ color: 'black' }}>
        СЕРВИСЫ
      </p>
      <br></br>
      <br></br>
      <ServicesForAdminList />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p className="fs-1 fw-bold" style={{ color: 'black' }}>
        ПРОДУКТЫ
      </p>
      <br></br>
      <br></br>
      <ProductForAdminList />
    </>
  );
}

export default SerchOrderList;
