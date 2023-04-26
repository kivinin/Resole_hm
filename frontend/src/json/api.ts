import { Customer } from './types/Customer';
import { Service, ServiceId } from './types/Service';
import { Product } from './types/Product';
import { Order } from './types/Order';

export const postCustomer = async (obj: Customer): Promise<Customer> => {
  const res = await fetch('/api/client', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(obj),
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  return res.json();
};

export const postOrder = async (obj: Order): Promise<Order> => {
  const res = await fetch('/api/order', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },

    body: JSON.stringify(obj),
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  return res.json();
};

export const getService = async (): Promise<Service[]> => {
  const res = await fetch('/api/service', {});
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  return res.json();
};

export const getProduct = async (): Promise<Product[]> => {
  const res = await fetch('/api/products', {});
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  return res.json();
};

export const removeService = async (serviceId: number): Promise<number> => {
  try {
    const res = await fetch(`/api/service/${serviceId}`, {
      method: 'DELETE',
    });
    return await res.json();
  } catch (error) {
    throw new Error('Ошибка');
  }
};

export const updateService = async (updatedService: {
  id: ServiceId;
  service_name: string;
  price: string;
  service_description: string;
  service_image: string;
}): Promise<Service> => {
  const res = await fetch(`/api/service/edit/${updatedService.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedService),
  });
  return res.json();
};

export const addNewService = async (newService: {
  service_name: string;
  price: string;
  service_description: string;
  service_image: string;
}): Promise<Service> => {
  const res = await fetch('/api/service', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newService),
  });
  return res.json();
};
