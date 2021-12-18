import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Route } from '../utils/interfaces/route.interface';
import { ConfigAPI as api } from '../../../shared/utils/api/config';

@Injectable({
  providedIn: 'root',
})
export class RoutesService {
  constructor(private http: HttpClient) {}

  getRoutes(): Observable<Route[]> {
    let url = `${api.apiURL}/api/route/read.php`;
    return this.http.get<Route[]>(url, api.headers);
  }

  addRoute(route: Route): Observable<Route> {
    let url = `${api.apiURL}/api/route/create.php`;
    return this.http.post<Route>(url, route, api.headers);
  }

  delRoute(routeID: number): Observable<number> {
    const options = {
      ...api.headers,
      body: {
        id: routeID,
      },
    };

    let url = `${api.apiURL}/api/route/delete.php`;
    return this.http.delete<number>(url, options);
  }

  updateRoute(route: Route): Observable<Route> {
    let url = `${api.apiURL}/api/route/update.php`;
    return this.http.put<Route>(url, route, api.headers);
  }
}
