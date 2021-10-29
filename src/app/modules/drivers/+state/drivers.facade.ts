import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/+state/app.state';
import { GetDrivers } from './drivers.actions';
import {
  selectDriversAddError,
  selectDriversAddLoading,
  selectDriversAddSuccess,
  selectDriversDelError,
  selectDriversDelLoading,
  selectDriversDelSuccess,
  selectDriversListError,
  selectDriversListItems,
  selectDriversListLoading,
  selectDriversListSuccess,
  selectDriversUpdateError,
  selectDriversUpdateLoading,
  selectDriversUpdateSuccess,
} from './drivers.selectors';

@Injectable()
export class DriversFacade {
  // ========== Selectors List
  driversListItems$ = this.store.select(selectDriversListItems);
  driversListLoading$ = this.store.select(selectDriversListLoading);
  driversListSuccess$ = this.store.select(selectDriversListSuccess);
  driversListError$ = this.store.select(selectDriversListError);

  // ========== Selectors Add
  driversAddLoading$ = this.store.select(selectDriversAddLoading);
  driversAddSuccess$ = this.store.select(selectDriversAddSuccess);
  driversAddError$ = this.store.select(selectDriversAddError);

  // ========== Selectors Del
  driversDelLoading$ = this.store.select(selectDriversDelLoading);
  driversDelSuccess$ = this.store.select(selectDriversDelSuccess);
  driversDelError$ = this.store.select(selectDriversDelError);

  // ========== Selectors Update
  driversUpdateLoading$ = this.store.select(selectDriversUpdateLoading);
  driversUpdateSuccess$ = this.store.select(selectDriversUpdateSuccess);
  driversUpdateError$ = this.store.select(selectDriversUpdateError);

  constructor(private store: Store<AppState>) {}

  getDrivers(): void {
    this.store.dispatch(new GetDrivers());
  }
}
