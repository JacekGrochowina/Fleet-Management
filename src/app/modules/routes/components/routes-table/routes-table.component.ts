import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { AddEditMode } from 'src/app/shared/utils/enums/add-edit-mode.enum';
import { RoutesFacade } from '../../+state/routes.facade';
import { Route } from '../../utils/interfaces/route.interface';
import { AddEditRouteComponent } from '../add-edit-route/add-edit-route.component';

@Component({
  selector: 'app-routes-table',
  templateUrl: './routes-table.component.html',
  styleUrls: ['./routes-table.component.scss'],
})
export class RoutesTableComponent implements OnInit {
  // ========== Selectors List
  routesListItems$ = this.routesFacade.routesListItems$;
  routesListLoading$ = this.routesFacade.routesListLoading$;
  routesListSuccess$ = this.routesFacade.routesListSuccess$;
  routesListError$ = this.routesFacade.routesListError$;

  // ========== Selectors Add
  routeAddLoading$ = this.routesFacade.routeAddLoading$;
  routeAddSuccess$ = this.routesFacade.routeAddSuccess$;
  routeAddError$ = this.routesFacade.routeAddError$;

  // ========== Selectors Del
  routeDelLoading$ = this.routesFacade.routeDelLoading$;
  routeDelSuccess$ = this.routesFacade.routeDelSuccess$;
  routeDelError$ = this.routesFacade.routeDelError$;

  // ========== Selectors Update
  routeUpdateLoading$ = this.routesFacade.routeUpdateLoading$;
  routeUpdateSuccess$ = this.routesFacade.routeUpdateSuccess$;
  routeUpdateError$ = this.routesFacade.routeUpdateError$;

  displayedColumns: string[] = [
    'vehicle',
    'driver',
    'dateStart',
    'dateFinish',
    'placeStart',
    'placeFinish',
    'loadType',
    'lengthRoute',
    'action',
  ];

  constructor(private routesFacade: RoutesFacade, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.routesFacade.getRoutes();
  }

  editRoute(route: Route): void {
    const dialogRef = this.dialog.open(AddEditRouteComponent, {
      data: {
        route,
        mode: AddEditMode.edit,
      },
      width: '90%',
      maxWidth: '500px',
    });
  }

  delRoute(routeID: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Usuwanie trasy',
        message: 'Czy napewno chcesz usunąć tę trasę?',
        confirmLabel: 'Usuń',
        dismissLabel: 'Anuluj',
        isAsync: true,
        close$: this.routeDelSuccess$,
        loading$: this.routeDelLoading$,
        errors$: this.routeDelError$,
        confirmed: () => {
          this.routesFacade.delRoute(routeID);
        },
      },
      width: '90%',
      maxWidth: '400px',
    });
  }
}
