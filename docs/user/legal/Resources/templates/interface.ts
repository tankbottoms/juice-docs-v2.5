import { stateCodes } from "./stateCodes.ts";

export interface Name {
  prefix: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  suffix: string;
}

export interface Address {
  number: number;
  street: string;
  city: string;
  county: string;
  state: StateCodes;
  zip: number;
  country?: string;
}

export enum PartyType {
  company: 'company',
  series: 'series',
  incorporator: 'incorporator',
  founder: 'founder',
  employee: 'employee',
  adminstrator: 'administrator',
  consultant: 'consultant',
  registeredAgent: 'registeredAgent',
}

export interface Party {
  name: string;
  type: PartyType;
  address: Address;
  purpose?: string;
  shares?: number;
  sharesPar?: number;
}

export interface Dapp {
  name?: string;
  address: string;
}
