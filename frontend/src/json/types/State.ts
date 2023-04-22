import { Customer } from './Customer';

export type State = {
  customers: Customer[];
  error: undefined | string;
};
