import { Driver } from 'src/app/modules/drivers/utils/interfaces/driver.interface';
import { Vehicle } from 'src/app/modules/vehicles/utils/interfaces/vehicle.interface';

export interface Route {
  id?: number;
  vehicle?: Vehicle;
  driver?: Driver;
  dateStart: string;
  dateFinish: string;
  placeStart: string;
  placeFinish: string;
  loadType: string;
  lengthRoute: string;
  fuelCosts: number;
  expeditionTime: number;
  driverSalary: number;
  profitExpedition: number;
  incomeExpedition: number;
  expensesExpedition: number;
}
