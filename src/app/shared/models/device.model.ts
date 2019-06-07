import { Dataset } from './dataset.model';

export interface Device {
  id: number;
  serialNumber: string | null;
  uuid: string | null;
  type: string;
  name: string;
  datasets?: Dataset[];
}
