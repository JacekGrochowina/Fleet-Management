import { LoadingHandler } from 'src/app/shared/utils/interfaces/loading-handler.interface';
import { Vehicle } from '../../utils/interfaces/vehicle.interface';

export interface VehiclesListState extends LoadingHandler {
  items: Vehicle[];
}
