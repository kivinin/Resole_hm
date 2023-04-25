import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import SerchOrderItem from './SerchOrderItem';

function SerchOrderList(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { service_orders } = useSelector(
    (store: RootState) => store.service_orders
  );
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Status</th>
          <th scope="col">Name</th>
          <th scope="col">PhoneNumber</th>
          <th scope="col">Adress</th>
          <th scope="col">Comments</th>
          <th scope="col">Photo Before</th>
          <th scope="col">Photo After</th>
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
  );
}

export default SerchOrderList;
