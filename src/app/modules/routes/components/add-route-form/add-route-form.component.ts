import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { combineLatest, Subject } from 'rxjs';
import { takeUntil, withLatestFrom } from 'rxjs/operators';
import { DriversFacade } from 'src/app/modules/drivers/+state/drivers.facade';
import { VehiclesFacade } from 'src/app/modules/vehicles/+state/vehicles.facade';
import { RoutesFacade } from '../../+state/routes.facade';
import { ActivatedRoute, Route, Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-add-route-form',
  templateUrl: './add-route-form.component.html',
  styleUrls: ['./add-route-form.component.scss'],
})
export class AddRouteFormComponent implements OnInit {
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
  // routeUpdateLoading$ = this.routesFacade.routeUpdateLoading$;
  // routeUpdateSuccess$ = this.routesFacade.routeUpdateSuccess$;
  // routeUpdateError$ = this.routesFacade.routeUpdateError$;

  form!: FormGroup;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private routesFacade: RoutesFacade,
    private vehiclesFacade: VehiclesFacade,
    private driversFacade: DriversFacade,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.vehiclesFacade.getVehicles();
    this.driversFacade.getDrivers();

    this.initForm();
    this.initCalcFormValues();
  }

  onSubmit(): void {
    const route: Route = _.omit(this.form.value, ['isAddNext']);
    // @ts-ignore
    this.routesFacade.addRoute(route);

    if (this.form.get('isAddNext')?.value) {
      this.clearForm();
    } else {
      this.goToRoutesList();
    }
  }

  clearForm(): void {
    this.form.patchValue({
      // Introduced values
      vehicle: null,
      driver: null,
      dateStart: null,
      dateFinish: null,
      placeStart: null,
      placeFinish: null,
      loadType: null,
      lengthRoute: null,
      incomeExpedition: null,

      // Calculated values
      fuelCost: 0,
      expeditionTime: 0,
      driverSalary: 0,
      expensesExpedition: 0,
      profitExpedition: 0,
    });
    this.form.markAsPristine();
    this.form.markAsUntouched();
  }

  goToRoutesList(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm(): void {
    this.form = this.fb.group({
      // Introduced values
      vehicle: [null, [Validators.required]],
      driver: [null, [Validators.required]],
      dateStart: [null, [Validators.required]],
      dateFinish: [null, [Validators.required]],
      placeStart: [null, [Validators.required]],
      placeFinish: [null, [Validators.required]],
      loadType: [null, [Validators.required]],
      lengthRoute: [null, [Validators.required, Validators.min(0)]],
      incomeExpedition: [null, [Validators.required, Validators.min(0)]],

      // Calculated values
      fuelCost: [0],
      expeditionTime: [0],
      driverSalary: [0],
      expensesExpedition: [0],
      profitExpedition: [0],

      // Settings values
      isAddNext: [false],
    });
  }

  private initCalcFormValues(): void {
    this.handleCalcFuelCost();
    this.handleCalcExpeditionTime();
    this.handleCalcDriverSalary();
    this.handleCalcExpensesExpedition();
    this.handleCalcProfitExpedition();
  }

  private handleCalcFuelCost(): void {
    let avgFuelConsumption: number;

    this.form
      .get('vehicle')
      ?.valueChanges.pipe(
        withLatestFrom(this.vehiclesListItems$),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(([value, vehiclesListItems]) => {
        const selectedVehicle = vehiclesListItems.find(
          (vehicleItem) => vehicleItem.id === value
        );
        avgFuelConsumption = Number(selectedVehicle?.avgFuelConsumption);
        this.calcFuelCost(
          avgFuelConsumption,
          this.form.get('lengthRoute')?.value
        );
      });

    this.form
      .get('lengthRoute')
      ?.valueChanges.pipe(takeUntil(this.unsubscribe$))
      .subscribe((value) => {
        this.calcFuelCost(avgFuelConsumption, value);
      });
  }

  private calcFuelCost(avgFuelConsumption: number, lengthRoute: number): void {
    if (avgFuelConsumption > 0 && lengthRoute > 0) {
      const FUEL_PRICE = 5.91;
      const value = this.roundTwoDecimalPlaces(
        avgFuelConsumption * FUEL_PRICE * (lengthRoute / 100)
      );
      this.form.get('fuelCost')?.setValue(value);
    } else {
      this.form.get('fuelCost')?.setValue(0);
    }
  }

  private handleCalcExpeditionTime(): void {
    combineLatest([
      this.form.get('dateStart')?.valueChanges,
      this.form.get('dateFinish')?.valueChanges,
    ])
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((daysRange) => {
        this.calcExpeditionTime(daysRange);
      });
  }

  private calcExpeditionTime(daysRange: any[]): void {
    const ONE_DAY = 1000 * 60 * 60 * 24;
    const differenceMs = Math.abs(daysRange[0] - daysRange[1]);
    const value = Math.round(differenceMs / ONE_DAY) + 1;

    if (daysRange[0] && daysRange[1]) {
      this.form.get('expeditionTime')?.setValue(value);
    } else {
      this.form.get('expeditionTime')?.setValue(0);
    }
  }

  private handleCalcDriverSalary(): void {
    let hourlyRate: number;

    this.form
      .get('driver')
      ?.valueChanges.pipe(
        withLatestFrom(this.driversListItems$),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(([value, driversListItems]) => {
        const selectedDriver = driversListItems.find(
          (driverItem) => driverItem.id === value
        );
        hourlyRate = Number(selectedDriver?.hourlyRate);
        this.calcDriverSalary(
          hourlyRate,
          this.form.get('expeditionTime')?.value
        );
      });

    this.form
      .get('expeditionTime')
      ?.valueChanges.pipe(takeUntil(this.unsubscribe$))
      .subscribe((value) => {
        this.calcDriverSalary(hourlyRate, value);
      });
  }

  private calcDriverSalary(hourlyRate: number, expeditionTime: number): void {
    if (hourlyRate > 0 && expeditionTime > 0) {
      const ONE_DAY_HOURS = 8;
      const value = this.roundTwoDecimalPlaces(
        hourlyRate * ONE_DAY_HOURS * expeditionTime
      );
      this.form.get('driverSalary')?.setValue(value);
    } else {
      this.form.get('driverSalary')?.setValue(0);
    }
  }

  private handleCalcExpensesExpedition(): void {
    combineLatest([
      this.form.get('fuelCost')?.valueChanges,
      this.form.get('driverSalary')?.valueChanges,
    ])
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((expenses) => {
        this.calcExpensesExpedition(expenses);
      });
  }

  private calcExpensesExpedition(expenses: any[]): void {
    if (expenses[0] > 0 && expenses[1] > 0) {
      const value = this.roundTwoDecimalPlaces(expenses[0] + expenses[1]);
      this.form.get('expensesExpedition')?.setValue(value);
    } else {
      this.form.get('expensesExpedition')?.setValue(0);
    }
  }

  private handleCalcProfitExpedition(): void {
    combineLatest([
      this.form.get('incomeExpedition')?.valueChanges,
      this.form.get('expensesExpedition')?.valueChanges,
    ])
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((balances) => {
        this.calcProfitExpedition(balances);
      });
  }

  private calcProfitExpedition(balances: any[]): void {
    if (balances[0] >= 0 && balances[1] >= 0) {
      const value = this.roundTwoDecimalPlaces(balances[0] - balances[1]);
      this.form.get('profitExpedition')?.setValue(value);
    } else {
      this.form.get('profitExpedition')?.setValue(0);
    }
  }

  roundTwoDecimalPlaces(value: number): number {
    return Math.round(value * 100) / 100;
  }
}
