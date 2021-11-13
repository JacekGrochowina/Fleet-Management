import { LoadingHandler } from 'src/app/shared/utils/interfaces/loading-handler.interface';
import { InitialLoadingHandler } from 'src/app/shared/utils/models/initial-loading-handler.model';
import { VehiclesListState } from './interfaces/vehicles-list.interface';

export interface VehiclesState {
  list: VehiclesListState;
  add: LoadingHandler;
  del: LoadingHandler;
  update: LoadingHandler;
}

export const vehiclesInitialState: VehiclesState = {
  list: {
    items: [],
    ...InitialLoadingHandler,
  },
  add: InitialLoadingHandler,
  del: InitialLoadingHandler,
  update: InitialLoadingHandler,
};
