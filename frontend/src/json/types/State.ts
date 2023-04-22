import { Customer} from './Customer';
import { Service } from './Service';

export type State = {
  customers: Customer[];
  services: Service[];
  error: undefined | string;
};
