import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/+state/app.state';
import { Route } from '../utils/interfaces/route.interface';
import { AddRoute, DelRoute, GetRoutes, UpdateRoute } from './routes.actions';
import {
  selectRoutesAddError,
  selectRoutesAddLoading,
  selectRoutesAddSuccess,
  selectRoutesDelError,
  selectRoutesDelLoading,
  selectRoutesDelSuccess,
  selectRoutesListError,
  selectRoutesListItems,
  selectRoutesListLoading,
  selectRoutesListSuccess,
  selectRoutesUpdateError,
  selectRoutesUpdateLoading,
  selectRoutesUpdateSuccess,
} from './routes.selectors';

@Injectable()
export class RoutesFacade {
  // ========== Selectors List
  routesListItems$ = this.store.select(selectRoutesListItems);
  routesListLoading$ = this.store.select(selectRoutesListLoading);
  routesListSuccess$ = this.store.select(selectRoutesListSuccess);
  routesListError$ = this.store.select(selectRoutesListError);

  // ========== Selectors Add
  routeAddLoading$ = this.store.select(selectRoutesAddLoading);
  routeAddSuccess$ = this.store.select(selectRoutesAddSuccess);
  routeAddError$ = this.store.select(selectRoutesAddError);

  // ========== Selectors Del
  routeDelLoading$ = this.store.select(selectRoutesDelLoading);
  routeDelSuccess$ = this.store.select(selectRoutesDelSuccess);
  routeDelError$ = this.store.select(selectRoutesDelError);

  // ========== Selectors Update
  routeUpdateLoading$ = this.store.select(selectRoutesUpdateLoading);
  routeUpdateSuccess$ = this.store.select(selectRoutesUpdateSuccess);
  routeUpdateError$ = this.store.select(selectRoutesUpdateError);

  constructor(private store: Store<AppState>) {}

  getRoutes(): void {
    this.store.dispatch(new GetRoutes());
  }

  addRoute(route: Route): void {
    this.store.dispatch(new AddRoute(route));
  }

  delRoute(routeID: number): void {
    this.store.dispatch(new DelRoute(routeID));
  }

  updateRoute(route: Route): void {
    this.store.dispatch(new UpdateRoute(route));
  }
}
