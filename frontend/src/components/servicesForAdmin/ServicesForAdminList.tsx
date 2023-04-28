import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import ServicesForAdminItem from './ServicesForAdminItem';
import FormAddServiceAdminItem from './FormAddServiceAdminItem';

function ServicesForAdminList(): JSX.Element {
  const { services } = useSelector((store: RootState) => store.service);
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Название сервиса</th>
            <th scope="col">Стоимость</th>
            <th scope="col">Описание</th>
            <th scope="col">Фотография</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <ServicesForAdminItem key={service.id} service={service} />
          ))}
        </tbody>
      </table>
      <FormAddServiceAdminItem />
    </>
  );
}

export default ServicesForAdminList;
