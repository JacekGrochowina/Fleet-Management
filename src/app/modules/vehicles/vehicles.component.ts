import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditMode } from 'src/app/shared/utils/enums/add-edit-mode.enum';
import { AddEditVehicleComponent } from './components/add-edit-vehicle/add-edit-vehicle.component';
import { AddEditVehicleDialogData } from './utils/interfaces/add-edit-vehicle-dialog-data.interface';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
})
export class VehiclesComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openAddVehicleDialog(): void {
    this.dialog.open(AddEditVehicleComponent, {
      data: {
        mode: AddEditMode.add,
      } as AddEditVehicleDialogData,
      width: '90%',
      maxWidth: '500px',
    });
  }
}
