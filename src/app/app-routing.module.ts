import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'kierowcy',
    loadChildren: () =>
      import('./modules/drivers/drivers.module').then((m) => m.DriversModule),
  },
  {
    path: 'pojazdy',
    loadChildren: () =>
      import('./modules/vehicles/vehicles.module').then(
        (m) => m.VehiclesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
