import { Component } from '@angular/core';
import { navItem } from './interfaces/nav-item.interface';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  navList: navItem[] = [
    {
      name: 'Podsumowanie',
      icon: 'analytics',
      path: '',
    },
    {
      name: 'Trasy',
      icon: 'route',
      path: 'trasy',
    },
    {
      name: 'Kierowcy',
      icon: 'people',
      path: 'kierowcy',
    },
    {
      name: 'Pojazdy',
      icon: 'local_shipping',
      path: 'pojazdy',
    },
  ];
}
