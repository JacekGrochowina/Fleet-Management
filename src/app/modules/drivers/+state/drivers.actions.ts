import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Driver } from '../utils/interfaces/driver.interface';

export enum DriversActionTypes {
  get = '[Drivers] Get Drivers',
  getSuccess = '[Drivers] Get Drivers Success',
  getFail = '[Drivers] Get Drivers Fail',

  add = '[Drivers] Add Driver',
  addSuccess = '[Drivers] Add Driver Success',
  addFail = '[Drivers] Add Driver Fail',

  del = '[Drivers] Del Driver',
  delSuccess = '[Drivers] Del Driver Success',
  delFail = '[Drivers] Del Driver Fail',

  update = '[Drivers] Update Driver',
  updateSuccess = '[Drivers] Update Driver Success',
  updateFail = '[Drivers] Update Driver Fail',
}

// ========== Get Drivers
export class GetDrivers implements Action {
  readonly type = DriversActionTypes.get;
}

export class GetDriversSuccess implements Action {
  readonly type = DriversActionTypes.getSuccess;

  constructor(public payload: Driver[]) {}
}

export class GetDriversFail implements Action {
  readonly type = DriversActionTypes.getFail;

  constructor(public payload: HttpErrorResponse) {}
}

// ========== Add Driver
export class AddDriver implements Action {
  readonly type = DriversActionTypes.add;

  constructor(public payload: Driver) {}
}

export class AddDriverSuccess implements Action {
  readonly type = DriversActionTypes.addSuccess;

  constructor(public payload: Driver) {}
}

export class AddDriverFail implements Action {
  readonly type = DriversActionTypes.addFail;

  constructor(public payload: HttpErrorResponse) {}
}

// ========== Del Driver
export class DelDriver implements Action {
  readonly type = DriversActionTypes.del;

  constructor(public payload: number) {}
}

export class DelDriverSuccess implements Action {
  readonly type = DriversActionTypes.delSuccess;

  constructor(public payload: number) {}
}

export class DelDriverFail implements Action {
  readonly type = DriversActionTypes.delFail;

  constructor(public payload: HttpErrorResponse) {}
}

// ========== Update Driver
export class UpdateDriver implements Action {
  readonly type = DriversActionTypes.update;

  constructor(public payload: Driver) {}
}

export class UpdateDriverSuccess implements Action {
  readonly type = DriversActionTypes.updateSuccess;

  constructor(public payload: Driver) {}
}

export class UpdateDriverFail implements Action {
  readonly type = DriversActionTypes.updateFail;

  constructor(public payload: HttpErrorResponse) {}
}

export type DriversAction =
  | GetDrivers
  | GetDriversSuccess
  | GetDriversFail
  | AddDriver
  | AddDriverSuccess
  | AddDriverFail
  | DelDriver
  | DelDriverSuccess
  | DelDriverFail
  | UpdateDriver
  | UpdateDriverSuccess
  | UpdateDriverFail;
