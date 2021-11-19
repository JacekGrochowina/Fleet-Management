import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AppState } from 'src/app/+state/app.state';
import { catchError, map, switchMap, mergeMap, tap } from 'rxjs/operators';
import { RoutesService } from '../services/routes.service';
import {
  AddRoute,
  AddRouteClear,
  AddRouteFail,
  AddRouteSuccess,
  DelRoute,
  DelRouteClear,
  DelRouteFail,
  DelRouteSuccess,
  GetRoutesFail,
  GetRoutesSuccess,
  UpdateRoute,
  UpdateRouteClear,
  UpdateRouteFail,
  UpdateRouteSuccess,
  RoutesActionTypes,
} from './routes.actions';

@Injectable()
export class RoutesEffects {
  constructor(
    private actions$: Actions,
    private routesService: RoutesService,
    private snackBar: MatSnackBar,
    private store: Store<AppState>
  ) {}

  getRoutes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RoutesActionTypes.get),
      switchMap(() =>
        this.routesService.getRoutes().pipe(
          map((response) => new GetRoutesSuccess(response)),
          catchError((error) => of(new GetRoutesFail(error)))
        )
      )
    )
  );

  addRoute$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RoutesActionTypes.add),
      mergeMap((action: AddRoute) =>
        this.routesService.addRoute(action.payload).pipe(
          tap((response) => {
            this.store.dispatch(new AddRouteSuccess());
          }),
          catchError((error) => of(new AddRouteFail(error)))
        )
      ),
      switchMap(() =>
        this.routesService.getRoutes().pipe(
          map((response) => new GetRoutesSuccess(response)),
          catchError((error) => of(new GetRoutesFail(error)))
        )
      )
    )
  );

  addRouteSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RoutesActionTypes.addSuccess),
        map(() => {
          this.snackBar.open('Dodano pomyślnie nową trasę', 'Ok', {
            duration: 3500,
          });
          this.store.dispatch(new AddRouteClear());
        })
      ),
    { dispatch: false }
  );

  delRoute$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RoutesActionTypes.del),
      mergeMap((action: DelRoute) =>
        this.routesService.delRoute(action.payload).pipe(
          tap((response) => {
            this.store.dispatch(new DelRouteSuccess());
          }),
          catchError((error) => of(new DelRouteFail(error)))
        )
      ),
      switchMap(() =>
        this.routesService.getRoutes().pipe(
          map((response) => new GetRoutesSuccess(response)),
          catchError((error) => of(new GetRoutesFail(error)))
        )
      )
    )
  );

  delRouteSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RoutesActionTypes.delSuccess),
        map(() => {
          this.snackBar.open('Pomyślnie usunięto trasę', 'Ok', {
            duration: 3500,
          });
          this.store.dispatch(new DelRouteClear());
        })
      ),
    { dispatch: false }
  );

  updateRoute$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RoutesActionTypes.update),
      mergeMap((action: UpdateRoute) =>
        this.routesService.updateRoute(action.payload).pipe(
          tap((response) => {
            this.store.dispatch(new UpdateRouteSuccess());
          }),
          catchError((error) => of(new UpdateRouteFail(error)))
        )
      ),
      switchMap(() =>
        this.routesService.getRoutes().pipe(
          map((response) => new GetRoutesSuccess(response)),
          catchError((error) => of(new GetRoutesFail(error)))
        )
      )
    )
  );

  updateRouteSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RoutesActionTypes.updateSuccess),
        map(() => {
          this.snackBar.open('Pomyślnie edytowano dane trasy', 'Ok', {
            duration: 3500,
          });
          this.store.dispatch(new UpdateRouteClear());
        })
      ),
    { dispatch: false }
  );
}
