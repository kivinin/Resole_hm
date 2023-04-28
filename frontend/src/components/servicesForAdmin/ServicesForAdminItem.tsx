import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { removeService } from '../../json/jsonSlice';

function ServicesForAdminItem({
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
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const routUpd = (): void => {
    navigate(`/service/edit/${service.id}`);
  };
  return (
    <tr>
      <th scope="row">{service.id}</th>
      <td>{service.service_name}</td>
      <td>{service.price} ₽</td>
      <td style={{ width: '70px', height: '70px' }}>
        {service.service_description}
      </td>
      <img
        src={service.service_image}
        alt="___"
        style={{ width: '70px', height: '70px' }}
      />
      <td>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => dispatch(removeService(service.id))}
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
      </td>
    </tr>
  );
}

export default ServicesForAdminItem;
