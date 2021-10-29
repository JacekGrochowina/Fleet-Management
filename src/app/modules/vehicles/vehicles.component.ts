import { Component, OnInit } from '@angular/core';

const ELEMENT_DATA = [
  {
    id: 1,
    brand: 'Scania',
    model: 'R420',
    yearManufacture: '2011',
    vin: 'YV1RS592472637050',
    fuelType: 'diesel',
    registrationNumber: 'EBE4033',
    dateRegistration: '2011-04-24',
    techReviewTimeInterval: 6,
    techReviewKilometerInterval: 40000,
  },
];

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
})
export class VehiclesComponent implements OnInit {
  displayedColumns: string[] = [
    'brand',
    'model',
    'yearManufacture',
    'vin',
    'fuelType',
    'registrationNumber',
    'dateRegistration',
    'techReviewTimeInterval',
    'techReviewKilometerInterval',
    'action',
  ];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}
}
