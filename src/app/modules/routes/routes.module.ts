import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RoutesRoutingModule } from './routes-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { RoutesComponent } from './routes.component';
import { RoutesTableComponent } from './components/routes-table/routes-table.component';
import { AddEditRouteComponent } from './components/add-edit-route/add-edit-route.component';
import { AddRouteFormComponent } from './components/add-route-form/add-route-form.component';
import { AddRoutePageComponent } from './pages/add-route-page/add-route-page.component';

import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    RoutesComponent,
    RoutesTableComponent,
    AddEditRouteComponent,
    AddRouteFormComponent,
    AddRoutePageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RoutesRoutingModule,
    SharedModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
  ],
  providers: [MatDatepickerModule],
})
export class RoutesModule {}
