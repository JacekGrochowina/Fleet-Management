import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    const params = new HttpParams()
      .append('brand', vehicle.brand)
      .append('model', vehicle.model)
      .append('yearManufacture', String(vehicle.yearManufacture))
      .append('vin', vehicle.vin)
      .append('fuelType', vehicle.fuelType)
      .append('registrationNumber', vehicle.registrationNumber)
      .append('dateRegistration', vehicle.dateRegistration)
      .append('techReviewTimeInterval', String(vehicle.techReviewTimeInterval))
      .append(
        'techReviewKilometerInterval',
        String(vehicle.techReviewKilometerInterval)
      );

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
    const params = new HttpParams()
      .append('id', String(vehicle.id))
      .append('brand', vehicle.brand)
      .append('model', vehicle.model)
      .append('yearManufacture', String(vehicle.yearManufacture))
      .append('vin', vehicle.vin)
      .append('fuelType', vehicle.fuelType)
      .append('registrationNumber', vehicle.registrationNumber)
      .append('dateRegistration', vehicle.dateRegistration)
      .append('techReviewTimeInterval', String(vehicle.techReviewTimeInterval))
      .append(
        'techReviewKilometerInterval',
        String(vehicle.techReviewKilometerInterval)
      );

    let url =
      'https://www.czprogramy.cba.pl/php/FleetManagement/UpdateVehicle.php';
    return this.http.put<Vehicle>(url, JSON.stringify(vehicle), { params });
  }
}
