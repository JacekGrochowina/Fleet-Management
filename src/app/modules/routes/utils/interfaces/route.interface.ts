export interface Route {
  id?: number;
  vehicle?: {
    id: number;
    brand: string;
    model: string;
    registrationNumber: string;
  };
  driver?: {
    id: number;
    name: string;
    surname: string;
  };
  dateStart: string;
  dateFinish: string;
  placeStart: string;
  placeFinish: string;
  loadType: string;
  lengthRoute: string;
}
