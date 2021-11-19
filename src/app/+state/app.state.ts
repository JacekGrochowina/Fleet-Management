import { DriversState } from '../modules/drivers/+state/drivers.state';
import { RoutesState } from '../modules/routes/+state/routes.state';
import { VehiclesState } from '../modules/vehicles/+state/vehicles.state';

export interface AppState {
  drivers: DriversState;
  vehicles: VehiclesState;
  routes: RoutesState;
}
