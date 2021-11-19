import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { createParams } from 'src/app/shared/utils/extensions/createParams';
import { Vehicle } from '../utils/interfaces/vehicle.interface';

@Injectable({
  providedIn: 'root',
})
export class VehiclesService {
  constructor(private http: HttpClient) {}

  getVehicles(): Observable<Vehicle[]> {
    let url =
      'https://www.czprogramy.cba.pl/php/FleetManagement/GetVehicles.php';
    return this.http.get<Vehicle[]>(url);
  }

  addVehicle(vehicle: Vehicle): Observable<Vehicle> {
    const params = createParams(vehicle);

    let url =
      'https://www.czprogramy.cba.pl/php/FleetManagement/AddVehicle.php';
    return this.http.post<Vehicle>(url, JSON.stringify(vehicle), {
      params,
    });
  }

  delVehicle(vehicleID: number): Observable<number> {
    const params = new HttpParams().append('id', String(vehicleID));
    let url =
      'https://www.czprogramy.cba.pl/php/FleetManagement/DeleteVehicle.php';
    return this.http.delete<number>(url, { params });
  }

  updateVehicle(vehicle: Vehicle): Observable<Vehicle> {
    const params = createParams(vehicle);

    let url =
      'https://www.czprogramy.cba.pl/php/FleetManagement/UpdateVehicle.php';
    return this.http.put<Vehicle>(url, JSON.stringify(vehicle), { params });
  }
}
