

export interface ItemProps {
  title: string;
  to: string;
  icon: React.ReactNode;
  selected: string;
  setSelected: (selected: string) => void;
}

export interface FormRecordMotor {
  name: string;
  power_out_hp: string;
  power_out_kw: string;
  voltage_rating: string;
  freq_hz: string;
  amps_rating: string;
  factor_service: string;
  frame: string;
  insulation_class: string;
  locked_rotor_current: string;
  locked_rotor_code: string;
  speed_rpm: string;
  // fetchFoldersAndFiles: () => Promise<void>
}

/* DATA DE FOLDER Y FILES AL TRAER */

export interface ElectricalResult {
  electrical_result_pk: string;
  test_electrical_result: TestElectricalResult[];
}

export interface TestElectricalResult {
  test_electrical_result_pk: string;
  test_date_time: string;
}

export interface TransientBoot {
  transient_boot_pk: string;
  test_transient_boot: TestTransientBoot[];
}

export interface TestTransientBoot {
  test_transient_boot_pk: string;
  test_date_time: string;
}

export interface EngineData {
  engine_pk: string;
  name: string;
  power_out_hp: number;
  power_out_kw: number;
  voltage_rating: number;
  speed_rpm: number;
  amps_rating: number;
  factor_service: number;
  frame: string;
  insulation_class: string;
  locked_rotor_current: number;
  locked_rotor_code: string;
  freq_hz: number;
  electrical_result: ElectricalResult;
  transient_boot: TransientBoot;
}


/* SOLO TRANSITORIOS AL TRAER DATA */
export type TransientBootData = {
  transient_boot_data: TransientData[];
  avg_i: number;
  avg_v: number;
}

export type TransientData = {
  name: string;
  data: number[];
  pointStart: number;
  pointInterval: number;
}

export interface ElectricResultButtonProps {
  label: string
}