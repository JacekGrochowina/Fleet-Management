import { Component, OnInit } from '@angular/core';
import { RoutesFacade } from 'src/app/modules/routes/+state/routes.facade';

@Component({
  selector: 'app-routes-overview-table',
  templateUrl: './routes-overview-table.component.html',
  styleUrls: ['./routes-overview-table.component.scss'],
})
export class RoutesOverviewTableComponent implements OnInit {
  // ========== Selectors List
  routesListItems$ = this.routesFacade.routesListItems$;
  routesListLoading$ = this.routesFacade.routesListLoading$;
  routesListSuccess$ = this.routesFacade.routesListSuccess$;
  routesListError$ = this.routesFacade.routesListError$;

  displayedColumns: string[] = [
    'destination',
    'dateRange',
    'driver',
    'incomeExpedition',
    'expensesExpedition',
    'profitExpedition',
  ];

  constructor(private routesFacade: RoutesFacade) {}

  ngOnInit(): void {}
}
