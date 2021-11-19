import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { createParams } from 'src/app/shared/utils/extensions/createParams';
import { Driver } from '../utils/interfaces/driver.interface';

@Injectable({
  providedIn: 'root',
})
export class DriversService {
  constructor(private http: HttpClient) {}

  getDrivers(): Observable<Driver[]> {
    let url =
      'https://www.czprogramy.cba.pl/php/FleetManagement/GetDrivers.php';
    return this.http.get<Driver[]>(url);
  }

  addDriver(driver: Driver): Observable<Driver> {
    // const params = new HttpParams()
    //   .append('name', driver.name)
    //   .append('surname', driver.surname)
    //   .append('pesel', driver.pesel)
    //   .append('hireDate', driver.hireDate)
    //   .append('firedDate', driver.firedDate ? driver.firedDate : '');
    const params = createParams(driver);

    let url =
      'https://www.czprogramy.cba.pl/php/FleetManagement/AddDrivers.php';
    return this.http.post<Driver>(url, JSON.stringify(driver), {
      params,
    });
  }

  delDriver(driverID: number): Observable<number> {
    const params = new HttpParams().append('id', String(driverID));

    let url =
      'https://www.czprogramy.cba.pl/php/FleetManagement/DeleteDrivers.php';
    return this.http.delete<number>(url, { params });
  }

  updateDriver(driver: Driver): Observable<Driver> {
    const params = createParams(driver);

    let url =
      'https://www.czprogramy.cba.pl/php/FleetManagement/UpdateDrivers.php';
    return this.http.put<Driver>(url, JSON.stringify(driver), { params });
  }
}
