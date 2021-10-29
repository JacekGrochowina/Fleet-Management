import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Driver } from '../utils/interfaces/driver.interface';

@Injectable({
  providedIn: 'root',
})
export class DriversService {
  constructor(private http: HttpClient) {}

  getDrivers(): Observable<Driver[]> {
    let url = `https://www.czprogramy.cba.pl/php/FleetManagement/GetDrivers.php`;
    return this.http.get<Driver[]>(url);
  }
}
