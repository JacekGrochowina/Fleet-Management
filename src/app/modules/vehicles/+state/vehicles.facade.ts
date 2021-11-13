import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/+state/app.state';
import { Vehicle } from '../utils/interfaces/vehicle.interface';
import {
  AddVehicle,
  DelVehicle,
  GetVehicles,
  UpdateVehicle,
} from './vehicles.actions';
import {
  selectVehiclesAddError,
  selectVehiclesAddLoading,
  selectVehiclesAddSuccess,
  selectVehiclesDelError,
  selectVehiclesDelLoading,
  selectVehiclesDelSuccess,
  selectVehiclesListError,
  selectVehiclesListItems,
  selectVehiclesListLoading,
  selectVehiclesListSuccess,
  selectVehiclesUpdateError,
  selectVehiclesUpdateLoading,
  selectVehiclesUpdateSuccess,
} from './vehicles.selectors';

@Injectable()
export class VehiclesFacade {
  // ========== Selectors List
  vehiclesListItems$ = this.store.select(selectVehiclesListItems);
  vehiclesListLoading$ = this.store.select(selectVehiclesListLoading);
  vehiclesListSuccess$ = this.store.select(selectVehiclesListSuccess);
  vehiclesListError$ = this.store.select(selectVehiclesListError);

  // ========== Selectors Add
  vehicleAddLoading$ = this.store.select(selectVehiclesAddLoading);
  vehicleAddSuccess$ = this.store.select(selectVehiclesAddSuccess);
  vehicleAddError$ = this.store.select(selectVehiclesAddError);

  // ========== Selectors Del
  vehicleDelLoading$ = this.store.select(selectVehiclesDelLoading);
  vehicleDelSuccess$ = this.store.select(selectVehiclesDelSuccess);
  vehicleDelError$ = this.store.select(selectVehiclesDelError);

  // ========== Selectors Update
  vehicleUpdateLoading$ = this.store.select(selectVehiclesUpdateLoading);
  vehicleUpdateSuccess$ = this.store.select(selectVehiclesUpdateSuccess);
  vehicleUpdateError$ = this.store.select(selectVehiclesUpdateError);

  constructor(private store: Store<AppState>) {}

  getVehicles(): void {
    this.store.dispatch(new GetVehicles());
  }

  addVehicle(vehicle: Vehicle): void {
    this.store.dispatch(new AddVehicle(vehicle));
  }

  delVehicle(vehicleID: number): void {
    this.store.dispatch(new DelVehicle(vehicleID));
  }

  updateVehicle(vehicle: Vehicle): void {
    this.store.dispatch(new UpdateVehicle(vehicle));
  }
}
