import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { DriversFacade } from 'src/app/modules/drivers/+state/drivers.facade';
import { VehiclesFacade } from 'src/app/modules/vehicles/+state/vehicles.facade';
import { AddEditMode } from 'src/app/shared/utils/enums/add-edit-mode.enum';
import { RoutesFacade } from '../../+state/routes.facade';
import { AddEditRouteDialogData } from '../../utils/interfaces/add-edit-route-dialog-data.interface';

@Component({
  selector: 'app-add-edit-route',
  templateUrl: './add-edit-route.component.html',
  styleUrls: ['./add-edit-route.component.scss'],
})
export class AddEditRouteComponent implements OnInit {
  // ========== Drivers | Selectors List
  driversListItems$ = this.driversFacade.driversListItems$;
  driversListLoading$ = this.driversFacade.driversListLoading$;
  driversListSuccess$ = this.driversFacade.driversListSuccess$;
  driversListError$ = this.driversFacade.driversListError$;

  // ========== Vehicles | Selectors List
  vehiclesListItems$ = this.vehiclesFacade.vehiclesListItems$;
  vehiclesListLoading$ = this.vehiclesFacade.vehiclesListLoading$;
  vehiclesListSuccess$ = this.vehiclesFacade.vehiclesListSuccess$;
  vehiclesListError$ = this.vehiclesFacade.vehiclesListError$;

  // ========== Routes | Selectors Add
  routeAddLoading$ = this.routesFacade.routeAddLoading$;
  routeAddSuccess$ = this.routesFacade.routeAddSuccess$;
  routeAddError$ = this.routesFacade.routeAddError$;

  // ========== Routes | Selectors Update
  routeUpdateLoading$ = this.routesFacade.routeUpdateLoading$;
  routeUpdateSuccess$ = this.routesFacade.routeUpdateSuccess$;
  routeUpdateError$ = this.routesFacade.routeUpdateError$;

  form!: FormGroup;

  private unsubscribe$ = new Subject<void>();

  constructor(
    private routesFacade: RoutesFacade,
    private vehiclesFacade: VehiclesFacade,
    private driversFacade: DriversFacade,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddEditRouteComponent>,
    @Inject(MAT_DIALOG_DATA) private data: AddEditRouteDialogData
  ) {}

  ngOnInit(): void {
    this.vehiclesFacade.getVehicles();
    this.driversFacade.getDrivers();

    this.initForm();
    if (this.isEditMode()) {
      this.setFormValues();
    }
  }

  onSubmit(): void {
    this.isAddMode() ? this.routeAddSubmit() : this.routeUpdateSubmit();
  }

  isAddMode(): boolean {
    return this.data.mode === AddEditMode.add;
  }

  isEditMode(): boolean {
    return this.data.mode === AddEditMode.edit;
  }

  private initForm(): void {
    this.form = this.fb.group({
      vehicle: ['', [Validators.required]],
      driver: ['', [Validators.required]],
      dateStart: ['', [Validators.required]],
      dateFinish: ['', [Validators.required]],
      placeStart: ['', [Validators.required]],
      placeFinish: ['', [Validators.required]],
      loadType: ['', [Validators.required]],
      lengthRoute: ['', [Validators.required, Validators.min(0)]],
    });
  }

  private setFormValues(): void {
    if (this.data.route) {
      this.form.patchValue(this.data.route);
      this.form.patchValue({
        vehicle: this.data.route.vehicle ? this.data.route.vehicle.id : null,
        driver: this.data.route.driver ? this.data.route.driver.id : null,
        dateStart: new Date(this.data.route.dateStart),
        dateFinish: new Date(this.data.route.dateFinish),
      });
    }
  }

  private routeAddSubmit(): void {
    this.routesFacade.addRoute(this.form.value);
    this.routeAddSuccess$
      .pipe(
        takeUntil(this.unsubscribe$),
        filter((routeAddSuccess) => !!routeAddSuccess)
      )
      .subscribe(() => {
        this.dialogRef.close(true);
      });
  }

  private routeUpdateSubmit(): void {
    this.routesFacade.updateRoute({
      id: this.data.route?.id,
      ...this.form.value,
    });
    this.routeUpdateSuccess$
      .pipe(
        takeUntil(this.unsubscribe$),
        filter((routeUpdateSuccess) => !!routeUpdateSuccess)
      )
      .subscribe(() => {
        this.dialogRef.close(true);
      });
  }
}
