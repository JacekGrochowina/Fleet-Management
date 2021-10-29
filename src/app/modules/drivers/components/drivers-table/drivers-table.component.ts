import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DriversFacade } from '../../+state/drivers.facade';

@Component({
  selector: 'app-drivers-table',
  templateUrl: './drivers-table.component.html',
  styleUrls: ['./drivers-table.component.scss'],
})
export class DriversTableComponent implements OnInit {
  // ========== Selectors List
  driversListItems$ = this.driversFacade.driversListItems$;
  driversListLoading$ = this.driversFacade.driversListLoading$;
  driversListSuccess$ = this.driversFacade.driversListSuccess$;
  driversListError$ = this.driversFacade.driversListError$;

  displayedColumns: string[] = [
    'name',
    'surname',
    'pesel',
    'hireDate',
    'firedDate',
    'action',
  ];

  private unsubscribe$ = new Subject<void>();

  constructor(private driversFacade: DriversFacade) {}

  ngOnInit(): void {
    this.driversFacade.getDrivers();
  }
}
