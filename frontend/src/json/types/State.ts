import { Customer } from './Customer';
import { Service } from './Service';
import { Product } from './Product';
import { Order } from './Order';

export type State = {
  customers: Customer[];
  services: Service[];
  products: Product[];
  carts: Product[];
  orders: Order[];
  error: undefined | string;
};
