import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DriversRoutingModule } from './drivers-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { StoreModule } from '@ngrx/store';
import { DriversReducer } from './+state/drivers.reducers';
import { DriversFacade } from './+state/drivers.facade';

import { DriversComponent } from './drivers.component';
import { DriversTableComponent } from './components/drivers-table/drivers-table.component';
import { AddEditDriverComponent } from './components/add-edit-driver/add-edit-driver.component';

import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    DriversComponent,
    DriversTableComponent,
    AddEditDriverComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DriversRoutingModule,
    SharedModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    StoreModule.forFeature('drivers', DriversReducer),
  ],
  providers: [MatDatepickerModule, DriversFacade],
})
export class DriversModule {}
