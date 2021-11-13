import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { AddEditMode } from 'src/app/shared/utils/enums/add-edit-mode.enum';
import { VehiclesFacade } from '../../+state/vehicles.facade';
import { Vehicle } from '../../utils/interfaces/vehicle.interface';
import { AddEditVehicleComponent } from '../add-edit-vehicle/add-edit-vehicle.component';

@Component({
  selector: 'app-vehicles-table',
  templateUrl: './vehicles-table.component.html',
  styleUrls: ['./vehicles-table.component.scss'],
})
export class VehiclesTableComponent implements OnInit {
  // ========== Selectors List
  vehiclesListItems$ = this.vehiclesFacade.vehiclesListItems$;
  vehiclesListLoading$ = this.vehiclesFacade.vehiclesListLoading$;
  vehiclesListSuccess$ = this.vehiclesFacade.vehiclesListSuccess$;
  vehiclesListError$ = this.vehiclesFacade.vehiclesListError$;

  // ========== Selectors Add
  vehicleAddLoading$ = this.vehiclesFacade.vehicleAddLoading$;
  vehicleAddSuccess$ = this.vehiclesFacade.vehicleAddSuccess$;
  vehicleAddError$ = this.vehiclesFacade.vehicleAddError$;

  // ========== Selectors Del
  vehicleDelLoading$ = this.vehiclesFacade.vehicleDelLoading$;
  vehicleDelSuccess$ = this.vehiclesFacade.vehicleDelSuccess$;
  vehicleDelError$ = this.vehiclesFacade.vehicleDelError$;

  // ========== Selectors Update
  vehicleUpdateLoading$ = this.vehiclesFacade.vehicleUpdateLoading$;
  vehicleUpdateSuccess$ = this.vehiclesFacade.vehicleUpdateSuccess$;
  vehicleUpdateError$ = this.vehiclesFacade.vehicleUpdateError$;

  displayedColumns: string[] = [
    'brand',
    'model',
    'yearManufacture',
    'vin',
    'fuelType',
    'registrationNumber',
    'dateRegistration',
    'techReviewTimeInterval',
    'techReviewKilometerInterval',
    'action',
  ];

  constructor(
    private vehiclesFacade: VehiclesFacade,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.vehiclesFacade.getVehicles();
  }

  editVehicle(vehicle: Vehicle): void {
    const dialogRef = this.dialog.open(AddEditVehicleComponent, {
      data: {
        vehicle,
        mode: AddEditMode.edit,
      },
      width: '90%',
      maxWidth: '500px',
    });
  }

  delVehicle(vehicleID: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Usuwanie pojazdu',
        message: 'Czy napewno chcesz usunąć ten pojazd?',
        confirmLabel: 'Usuń',
        dismissLabel: 'Anuluj',
        isAsync: true,
        close$: this.vehicleDelSuccess$,
        loading$: this.vehicleDelLoading$,
        errors$: this.vehicleDelError$,
        confirmed: () => {
          this.vehiclesFacade.delVehicle(vehicleID);
        },
      },
      width: '90%',
      maxWidth: '400px',
    });
  }

  displayFuelType(value: string): string {
    switch (value) {
      case 'oil':
        return 'olej napędowy';
      case 'gasoline':
        return 'benzyna';
      case 'lpg':
        return 'LPG';
      default:
        return 'inny';
    }
  }
}
