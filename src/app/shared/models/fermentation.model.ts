import { Dataset } from './dataset.model';

export interface Fermentation {
  id: number;
  name: string;
  datasets?: Dataset[];
}
