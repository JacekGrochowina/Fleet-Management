import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRoutePageComponent } from './pages/add-route-page/add-route-page.component';
import { RoutesComponent } from './routes.component';

const routes: Routes = [
  { path: '', component: RoutesComponent },
  { path: 'dodaj', component: AddRoutePageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutesRoutingModule {}
