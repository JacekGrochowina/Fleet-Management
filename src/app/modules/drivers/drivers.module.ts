import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriversRoutingModule } from './drivers-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { StoreModule } from '@ngrx/store';
import { DriversReducer } from './+state/drivers.reducers';
import { DriversFacade } from './+state/drivers.facade';

import { DriversComponent } from './drivers.component';
import { DriversTableComponent } from './components/drivers-table/drivers-table.component';

import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [DriversComponent, DriversTableComponent],
  imports: [
    CommonModule,
    DriversRoutingModule,
    SharedModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    StoreModule.forFeature('drivers', DriversReducer),
  ],
  providers: [DriversFacade],
})
export class DriversModule {}
