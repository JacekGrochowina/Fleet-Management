import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Vehicle } from '../utils/interfaces/vehicle.interface';

export enum VehiclesActionTypes {
  get = '[Vehicles] Get Vehicles',
  getSuccess = '[Vehicles] Get Vehicles Success',
  getFail = '[Vehicles] Get Vehicles Fail',
  getClear = '[Vehicles] Get Vehicles Clear',

  add = '[Vehicles] Add Vehicle',
  addSuccess = '[Vehicles] Add Vehicle Success',
  addFail = '[Vehicles] Add Vehicle Fail',
  addClear = '[Vehicles] Add Vehicle Clear',

  del = '[Vehicles] Del Vehicle',
  delSuccess = '[Vehicles] Del Vehicle Success',
  delFail = '[Vehicles] Del Vehicle Fail',
  delClear = '[Vehicles] Del Vehicle Clear',

  update = '[Vehicles] Update Vehicle',
  updateSuccess = '[Vehicles] Update Vehicle Success',
  updateFail = '[Vehicles] Update Vehicle Fail',
  updateClear = '[Vehicles] Update Vehicle Clear',
}

// ========== Get Vehicles
export class GetVehicles implements Action {
  readonly type = VehiclesActionTypes.get;
}

export class GetVehiclesSuccess implements Action {
  readonly type = VehiclesActionTypes.getSuccess;

  constructor(public payload: Vehicle[]) {}
}

export class GetVehiclesFail implements Action {
  readonly type = VehiclesActionTypes.getFail;

  constructor(public payload: HttpErrorResponse) {}
}

// ========== Add Vehicle
export class AddVehicle implements Action {
  readonly type = VehiclesActionTypes.add;

  constructor(public payload: Vehicle) {}
}

export class AddVehicleSuccess implements Action {
  readonly type = VehiclesActionTypes.addSuccess;

  constructor() {}
}

export class AddVehicleFail implements Action {
  readonly type = VehiclesActionTypes.addFail;

  constructor(public payload: HttpErrorResponse) {}
}

export class AddVehicleClear implements Action {
  readonly type = VehiclesActionTypes.addClear;

  constructor() {}
}

// ========== Del Vehicle
export class DelVehicle implements Action {
  readonly type = VehiclesActionTypes.del;

  constructor(public payload: number) {}
}

export class DelVehicleSuccess implements Action {
  readonly type = VehiclesActionTypes.delSuccess;

  constructor() {}
}

export class DelVehicleFail implements Action {
  readonly type = VehiclesActionTypes.delFail;

  constructor(public payload: HttpErrorResponse) {}
}

export class DelVehicleClear implements Action {
  readonly type = VehiclesActionTypes.delClear;

  constructor() {}
}

// ========== Update Vehicle
export class UpdateVehicle implements Action {
  readonly type = VehiclesActionTypes.update;

  constructor(public payload: Vehicle) {}
}

export class UpdateVehicleSuccess implements Action {
  readonly type = VehiclesActionTypes.updateSuccess;

  constructor() {}
}

export class UpdateVehicleFail implements Action {
  readonly type = VehiclesActionTypes.updateFail;

  constructor(public payload: HttpErrorResponse) {}
}

export class UpdateVehicleClear implements Action {
  readonly type = VehiclesActionTypes.updateClear;

  constructor() {}
}

export type VehiclesActions =
  | GetVehicles
  | GetVehiclesSuccess
  | GetVehiclesFail
  | AddVehicle
  | AddVehicleSuccess
  | AddVehicleFail
  | AddVehicleClear
  | DelVehicle
  | DelVehicleSuccess
  | DelVehicleFail
  | DelVehicleClear
  | UpdateVehicle
  | UpdateVehicleSuccess
  | UpdateVehicleFail
  | UpdateVehicleClear;
