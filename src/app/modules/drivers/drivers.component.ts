import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditMode } from 'src/app/shared/utils/enums/add-edit-mode.enum';
import { DriversFacade } from './+state/drivers.facade';
import { AddEditDriverComponent } from './components/add-driver/add-edit-driver.component';
import { AddEditDriverDialogData } from './utils/interfaces/add-edit-driver-dialog-data.interface';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss'],
})
export class DriversComponent implements OnInit {
  // ========== Selectors Add
  driverAddLoading$ = this.driversFacade.driverAddLoading$;
  driverAddSuccess$ = this.driversFacade.driverAddSuccess$;
  driverAddError$ = this.driversFacade.driverAddError$;

  constructor(private driversFacade: DriversFacade, public dialog: MatDialog) {}

  ngOnInit(): void {}

  openAddDriverDialog(): void {
    this.dialog.open(AddEditDriverComponent, {
      data: {
        mode: AddEditMode.add,
      } as AddEditDriverDialogData,
      maxWidth: '500px',
    });
  }
}
