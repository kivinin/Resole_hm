import { Customer } from "./Customer";
import { Service } from "./Service";
import { Product } from "./Product";

export type State = {
  customers: Customer[];
  services: Service[];
  products: Product[];
  carts: Product[];
  error: undefined | string;
};
