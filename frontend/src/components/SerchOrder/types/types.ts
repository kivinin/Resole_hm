export type ServiceOrder = {
  id: number;
  client_id: number;
  service_id: number;
  status: string;
  unique_key: string;
  before_img: string;
  after_img: string;
  comments: string;
  Client: {
    id: number;
    name: string;
    number: string;
    adress: string;
  };
};

export type ServiceOrderId = ServiceOrder['id'];
