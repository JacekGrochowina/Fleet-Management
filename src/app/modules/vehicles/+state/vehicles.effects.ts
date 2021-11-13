import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AppState } from 'src/app/+state/app.state';
import { catchError, map, switchMap, mergeMap, tap } from 'rxjs/operators';
import { VehiclesService } from '../services/vehicles.service';
import {
  AddVehicle,
  AddVehicleClear,
  AddVehicleFail,
  AddVehicleSuccess,
  DelVehicle,
  DelVehicleClear,
  DelVehicleFail,
  DelVehicleSuccess,
  GetVehiclesFail,
  GetVehiclesSuccess,
  UpdateVehicle,
  UpdateVehicleClear,
  UpdateVehicleFail,
  UpdateVehicleSuccess,
  VehiclesActionTypes,
} from './vehicles.actions';

@Injectable()
export class VehiclesEffects {
  constructor(
    private actions$: Actions,
    private vehiclesService: VehiclesService,
    private snackBar: MatSnackBar,
    private store: Store<AppState>
  ) {}

  getVehicles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VehiclesActionTypes.get),
      switchMap(() =>
        this.vehiclesService.getVehicles().pipe(
          map((response) => new GetVehiclesSuccess(response)),
          catchError((error) => of(new GetVehiclesFail(error)))
        )
      )
    )
  );

  addVehicle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VehiclesActionTypes.add),
      mergeMap((action: AddVehicle) =>
        this.vehiclesService.addVehicle(action.payload).pipe(
          tap((response) => {
            this.store.dispatch(new AddVehicleSuccess());
          }),
          catchError((error) => of(new AddVehicleFail(error)))
        )
      ),
      switchMap(() =>
        this.vehiclesService.getVehicles().pipe(
          map((response) => new GetVehiclesSuccess(response)),
          catchError((error) => of(new GetVehiclesFail(error)))
        )
      )
    )
  );

  addVehicleSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(VehiclesActionTypes.addSuccess),
        map(() => {
          this.snackBar.open('Dodano pomyślnie nowy pojazd', 'Ok', {
            duration: 3500,
          });
          this.store.dispatch(new AddVehicleClear());
        })
      ),
    { dispatch: false }
  );

  delVehicle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VehiclesActionTypes.del),
      mergeMap((action: DelVehicle) =>
        this.vehiclesService.delVehicle(action.payload).pipe(
          tap((response) => {
            this.store.dispatch(new DelVehicleSuccess());
          }),
          catchError((error) => of(new DelVehicleFail(error)))
        )
      ),
      switchMap(() =>
        this.vehiclesService.getVehicles().pipe(
          map((response) => new GetVehiclesSuccess(response)),
          catchError((error) => of(new GetVehiclesFail(error)))
        )
      )
    )
  );

  delVehicleSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(VehiclesActionTypes.delSuccess),
        map(() => {
          this.snackBar.open('Pomyślnie usunięto pojazd', 'Ok', {
            duration: 3500,
          });
          this.store.dispatch(new DelVehicleClear());
        })
      ),
    { dispatch: false }
  );

  updateVehicle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VehiclesActionTypes.update),
      mergeMap((action: UpdateVehicle) =>
        this.vehiclesService.updateVehicle(action.payload).pipe(
          tap((response) => {
            this.store.dispatch(new UpdateVehicleSuccess());
          }),
          catchError((error) => of(new UpdateVehicleFail(error)))
        )
      ),
      switchMap(() =>
        this.vehiclesService.getVehicles().pipe(
          map((response) => new GetVehiclesSuccess(response)),
          catchError((error) => of(new GetVehiclesFail(error)))
        )
      )
    )
  );

  updateVehicleSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(VehiclesActionTypes.updateSuccess),
        map(() => {
          this.snackBar.open('Pomyślnie edytowano dane pojazdu', 'Ok', {
            duration: 3500,
          });
          this.store.dispatch(new UpdateVehicleClear());
        })
      ),
    { dispatch: false }
  );
}
