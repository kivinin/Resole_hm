import { ServiceOrder, ServiceOrderId } from './types/types';

export const getServiceOrder = async (): Promise<ServiceOrder[]> => {
  const res = await fetch('/api/serviceorders');
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  return res.json();
};

export const removeServiceOrder = async (
  serviceorderId: number
): Promise<number> => {
  try {
    const res = await fetch(`/api/serviceorders/${serviceorderId}`, {
      method: 'DELETE',
    });
    return await res.json();
  } catch (error) {
    throw new Error('Ошибка');
  }
};

export const updateServiceOrder = async (updatedServiceOrder: {
  id: ServiceOrderId;
  status: string;
  before_img: string;
  after_img: string;
  comments: string;
}): Promise<ServiceOrder> => {
  const res = await fetch(`/api/serviceorders/edit/${updatedServiceOrder.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedServiceOrder),
  });
  return res.json();
};
