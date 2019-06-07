import { Fermentation } from './fermentation.model';
import { Device } from './device.model';

export interface Dataset {
  id: number;
  unit: string;
  variableMeasured: string;
  fermentation?: Fermentation;
  loggingDevice?: Device;
  // controls?: Control[];
  datapoints: {
    id: number;
    timestamp: Date;
    value: number
  };
}
