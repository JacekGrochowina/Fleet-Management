import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { AddEditMode } from 'src/app/shared/utils/enums/add-edit-mode.enum';
import { Masks } from 'src/app/shared/utils/masks';
import { VehiclesFacade } from '../../+state/vehicles.facade';
import { AddEditVehicleDialogData } from '../../utils/interfaces/add-edit-vehicle-dialog-data.interface';
import { Vehicle } from '../../utils/interfaces/vehicle.interface';

@Component({
  selector: 'app-add-edit-vehicle',
  templateUrl: './add-edit-vehicle.component.html',
  styleUrls: ['./add-edit-vehicle.component.scss'],
})
export class AddEditVehicleComponent implements OnInit {
  // ========== Selectors Add
  vehicleAddLoading$ = this.vehiclesFacade.vehicleAddLoading$;
  vehicleAddSuccess$ = this.vehiclesFacade.vehicleAddSuccess$;
  vehicleAddError$ = this.vehiclesFacade.vehicleAddError$;

  // ========== Selectors Update
  vehicleUpdateLoading$ = this.vehiclesFacade.vehicleUpdateLoading$;
  vehicleUpdateSuccess$ = this.vehiclesFacade.vehicleUpdateSuccess$;
  vehicleUpdateError$ = this.vehiclesFacade.vehicleUpdateError$;

  form!: FormGroup;
  vinMask = Masks.vin;
  yearManufactureMask = Masks.yearManufacture;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private vehiclesFacade: VehiclesFacade,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddEditVehicleComponent>,
    @Inject(MAT_DIALOG_DATA) private data: AddEditVehicleDialogData
  ) {}

  ngOnInit(): void {
    this.initForm();
    if (this.isEditMode()) {
      this.setFormValues();
    }
  }

  onSubmit(): void {
    this.isAddMode() ? this.vehicleAddSubmit() : this.vehicleUpdateSubmit();
  }

  isAddMode(): boolean {
    return this.data.mode === AddEditMode.add;
  }

  isEditMode(): boolean {
    return this.data.mode === AddEditMode.edit;
  }

  private initForm(): void {
    this.form = this.fb.group({
      brand: ['', [Validators.required]],
      model: ['', [Validators.required]],
      yearManufacture: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(4)],
      ],
      vin: ['', [Validators.required]],
      fuelType: ['', [Validators.required]],
      registrationNumber: ['', [Validators.required]],
      avgFuelConsumption: ['', [Validators.required, Validators.min(0)]],
      vehicleType: ['', [Validators.required]],
    });
  }

  private setFormValues(): void {
    if (this.data.vehicle) {
      this.form.patchValue(this.data.vehicle);
    }
  }

  private vehicleAddSubmit(): void {
    this.vehiclesFacade.addVehicle(this.form.value);
    this.vehicleAddSuccess$
      .pipe(
        takeUntil(this.unsubscribe$),
        filter((vehicleAddSuccess) => !!vehicleAddSuccess)
      )
      .subscribe(() => {
        this.dialogRef.close(true);
      });
  }

  private vehicleUpdateSubmit(): void {
    this.vehiclesFacade.updateVehicle({
      id: this.data.vehicle?.id,
      ...this.form.value,
    });
    this.vehicleUpdateSuccess$
      .pipe(
        takeUntil(this.unsubscribe$),
        filter((vehicleUpdateSuccess) => !!vehicleUpdateSuccess)
      )
      .subscribe(() => {
        this.dialogRef.close(true);
      });
  }
}
