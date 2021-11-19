import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { DriversEffects } from './modules/drivers/+state/drivers.effects';
import { VehiclesEffects } from './modules/vehicles/+state/vehicles.effects';
import { RoutesEffects } from './modules/routes/+state/routes.effects';

import { DriversReducer } from './modules/drivers/+state/drivers.reducers';
import { RoutesReducer } from './modules/routes/+state/routes.reducers';
import { VehiclesReducer } from './modules/vehicles/+state/vehicles.reducers';

import { DriversFacade } from './modules/drivers/+state/drivers.facade';
import { VehiclesFacade } from './modules/vehicles/+state/vehicles.facade';
import { RoutesFacade } from './modules/routes/+state/routes.facade';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      // @ts-ignore
      drivers: DriversReducer,
      // @ts-ignore
      vehicles: VehiclesReducer,
      // @ts-ignore
      routes: RoutesReducer,
    }),
    EffectsModule.forRoot([DriversEffects, VehiclesEffects, RoutesEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [
    DriversFacade,
    VehiclesFacade,
    RoutesFacade,
    { provide: MAT_DATE_LOCALE, useValue: 'pl-PL' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
