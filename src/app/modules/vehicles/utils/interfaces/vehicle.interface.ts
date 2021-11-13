export interface Vehicle {
  id?: number;
  brand: string;
  model: string;
  yearManufacture: number;
  vin: string;
  fuelType: string;
  registrationNumber: string;
  dateRegistration: string;
  techReviewTimeInterval: number;
  techReviewKilometerInterval: number;
}
