import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from '../utils/interfaces/vehicle.interface';
import { ConfigAPI as api } from '../../../shared/utils/api/config';

@Injectable({
  providedIn: 'root',
})
export class VehiclesService {
  constructor(private http: HttpClient) {}

  getVehicles(): Observable<Vehicle[]> {
    let url = `${api.apiURL}/api/vehicle/read.php`;
    return this.http.get<Vehicle[]>(url, api.headers);
  }

  addVehicle(vehicle: Vehicle): Observable<Vehicle> {
    let url = `${api.apiURL}/api/vehicle/create.php`;
    return this.http.post<Vehicle>(url, vehicle, api.headers);
  }

  delVehicle(vehicleID: number): Observable<number> {
    const options = {
      ...api.headers,
      body: {
        id: vehicleID,
      },
    };

    let url = `${api.apiURL}/api/vehicle/delete.php`;
    return this.http.delete<number>(url, options);
  }

  updateVehicle(vehicle: Vehicle): Observable<Vehicle> {
    let url = `${api.apiURL}/api/vehicle/update.php`;
    return this.http.put<Vehicle>(url, vehicle, api.headers);
  }
}
