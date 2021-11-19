import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { createParams } from 'src/app/shared/utils/extensions/createParams';
import { Route } from '../utils/interfaces/route.interface';

@Injectable({
  providedIn: 'root',
})
export class RoutesService {
  constructor(private http: HttpClient) {}

  getRoutes(): Observable<Route[]> {
    let url = 'https://czProgramy.cba.pl/php/FleetManagement/GetRoutes.php';
    return this.http.get<Route[]>(url);
  }

  addRoute(route: Route): Observable<Route> {
    const params = createParams(route);

    let url = 'https://czProgramy.cba.pl/php/FleetManagement/AddRoutes.php';
    return this.http.post<Route>(url, JSON.stringify(route), {
      params,
    });
  }

  delRoute(routeID: number): Observable<number> {
    const params = new HttpParams().append('id', String(routeID));
    let url =
      'https://www.czprogramy.cba.pl/php/FleetManagement/DeleteRoutes.php';
    return this.http.delete<number>(url, { params });
  }

  updateRoute(route: Route): Observable<Route> {
    const params = createParams(route);

    let url = 'https://czProgramy.cba.pl/php/FleetManagement/UpdateRoutes.php';
    return this.http.put<Route>(url, JSON.stringify(route), {
      params,
    });
  }
}
