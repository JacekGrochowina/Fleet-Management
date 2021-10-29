import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AppState } from 'src/app/+state/app.state';
import { catchError, map, switchMap, mergeMap, tap } from 'rxjs/operators';
import { DriversService } from '../services/drivers.service';
import {
  DriversActionTypes,
  GetDriversFail,
  GetDriversSuccess,
} from './drivers.actions';

@Injectable()
export class DriversEffects {
  constructor(
    private actions$: Actions,
    private driversService: DriversService,
    private store: Store<AppState>
  ) {}

  getDrivers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DriversActionTypes.get),
      switchMap(() =>
        this.driversService.getDrivers().pipe(
          map((response) => new GetDriversSuccess(response)),
          catchError((error) => of(new GetDriversFail(error)))
        )
      )
    )
  );

  //   getDriversSuccess$ =
}
