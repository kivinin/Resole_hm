import { Product } from './Product';

export type Order = {
  name: string;
  number: string;
  carts: Product[];
};
