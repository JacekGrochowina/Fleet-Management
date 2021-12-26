import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutesFacade } from '../routes/+state/routes.facade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private routesFacade: RoutesFacade, private router: Router) {}

  ngOnInit(): void {
    this.routesFacade.getRoutes();
  }

  goToAddRoute(): void {
    this.router.navigate(['trasy/dodaj']);
  }
}
