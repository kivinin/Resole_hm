import { ServiceOrder } from './types';

export type State = {
  service_orders: ServiceOrder[];
  error: undefined | string;
};
