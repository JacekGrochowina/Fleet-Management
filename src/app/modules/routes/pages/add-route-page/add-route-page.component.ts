import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackTo } from 'src/app/shared/utils/interfaces/back-to.interface';

@Component({
  selector: 'app-add-route-page',
  templateUrl: './add-route-page.component.html',
  styleUrls: ['./add-route-page.component.scss'],
})
export class AddRoutePageComponent {
  backTo: BackTo = {
    path: '../',
    route: this.route,
  };

  constructor(private route: ActivatedRoute) {}
}
