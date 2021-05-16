import {DayOfWeek} from "./dayOfWeek";

export interface Customer {
  name: string;
  addressOne: string;
  addressTwo?: string;
  postalCode: string;
  tel: string;
  email: string;
  openingHours: DayOfWeek[]
 }
