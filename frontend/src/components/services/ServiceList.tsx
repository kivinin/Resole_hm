import React from "react";
import { useSelector } from "react-redux";
import ServiceItem from "./ServiceItem";
import { RootState } from "../../store";

function ServiceList(): JSX.Element {
  const { services } = useSelector((store: RootState) => store.service);
  return (
    <div>

      {services.map((service) => (
        <ServiceItem key={service.id} service={service} />
      ))}
    </div>
  );
}

export default ServiceList;
