export type Service = {
  id: number;
  service_name: string;
  price: string;
  service_description: string;
  service_image: string;
};

export type ServiceId = Service['id'];
