import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Route } from '../utils/interfaces/route.interface';

export enum RoutesActionTypes {
  get = '[Routes] Get Vehicles',
  getSuccess = '[Routes] Get Routes Success',
  getFail = '[Routes] Get Routes Fail',
  getClear = '[Routes] Get Routes Clear',

  add = '[Routes] Add Route',
  addSuccess = '[Routes] Add Route Success',
  addFail = '[Routes] Add Route Fail',
  addClear = '[Routes] Add Route Clear',

  del = '[Routes] Del Route',
  delSuccess = '[Routes] Del Route Success',
  delFail = '[Routes] Del Route Fail',
  delClear = '[Routes] Del Route Clear',

  update = '[Routes] Update Route',
  updateSuccess = '[Routes] Update Route Success',
  updateFail = '[Routes] Update Route Fail',
  updateClear = '[Routes] Update Route Clear',
}

// ========== Get Routes
export class GetRoutes implements Action {
  readonly type = RoutesActionTypes.get;
}

export class GetRoutesSuccess implements Action {
  readonly type = RoutesActionTypes.getSuccess;

  constructor(public payload: Route[]) {}
}

export class GetRoutesFail implements Action {
  readonly type = RoutesActionTypes.getFail;

  constructor(public payload: HttpErrorResponse) {}
}

// ========== Add Route
export class AddRoute implements Action {
  readonly type = RoutesActionTypes.add;

  constructor(public payload: Route) {}
}

export class AddRouteSuccess implements Action {
  readonly type = RoutesActionTypes.addSuccess;

  constructor() {}
}

export class AddRouteFail implements Action {
  readonly type = RoutesActionTypes.addFail;

  constructor(public payload: HttpErrorResponse) {}
}

export class AddRouteClear implements Action {
  readonly type = RoutesActionTypes.addClear;

  constructor() {}
}

// ========== Del Route
export class DelRoute implements Action {
  readonly type = RoutesActionTypes.del;

  constructor(public payload: number) {}
}

export class DelRouteSuccess implements Action {
  readonly type = RoutesActionTypes.delSuccess;

  constructor() {}
}

export class DelRouteFail implements Action {
  readonly type = RoutesActionTypes.delFail;

  constructor(public payload: HttpErrorResponse) {}
}

export class DelRouteClear implements Action {
  readonly type = RoutesActionTypes.delClear;

  constructor() {}
}

// ========== Update Route
export class UpdateRoute implements Action {
  readonly type = RoutesActionTypes.update;

  constructor(public payload: Route) {}
}

export class UpdateRouteSuccess implements Action {
  readonly type = RoutesActionTypes.updateSuccess;

  constructor() {}
}

export class UpdateRouteFail implements Action {
  readonly type = RoutesActionTypes.updateFail;

  constructor(public payload: HttpErrorResponse) {}
}

export class UpdateRouteClear implements Action {
  readonly type = RoutesActionTypes.updateClear;

  constructor() {}
}

export type RoutesActions =
  | GetRoutes
  | GetRoutesSuccess
  | GetRoutesFail
  | AddRoute
  | AddRouteSuccess
  | AddRouteFail
  | AddRouteClear
  | DelRoute
  | DelRouteSuccess
  | DelRouteFail
  | DelRouteClear
  | UpdateRoute
  | UpdateRouteSuccess
  | UpdateRouteFail
  | UpdateRouteClear;
