import React from "react";

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
    <div>
      <h2>{service.service_name}</h2>
      <h2>{service.price}</h2>
      <h2>{service.service_description}</h2>
      <div>
        <img src={`${service.service_image}`} />
      </div>
    </div>
  );
}

export default ServiceItem;
