export interface Fermentation {
  id: number;
  name: string;
  datasets: (Dataset | string)[];  // This could be an array of URLs (strings) or Datasets
}

export interface Device {
  id: number;
  serial_number: string | null;
  uuid: string | null;
  type: string;
  name: string;
  datasets?: Dataset[];
}

export class Control {
  id: 1;
  created: Date;
  start_effect: Date;
  end_effect: Date;
  output_device: (Device | string);
  input_data: (Dataset | string);
  target_value: number;
}

export class Datapoint {
  id: number;
  timestamp: Date;
  value: number;
}

export interface Dataset {
  id: number;
  unit: string;
  variable_measured: string;
  fermentation?: Fermentation;
  logging_device?: Device;
  controls?: Control[];
  active: boolean;
  datapoints: (Datapoint | string)[];
}
