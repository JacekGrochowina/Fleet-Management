import { LoadingHandler } from 'src/app/shared/utils/interfaces/loading-handler.interface';
import { InitialLoadingHandler } from 'src/app/shared/utils/models/initial-loading-handler.model';
import { RoutesListState } from './interfaces/routes-list.interface';

export interface RoutesState {
  list: RoutesListState;
  add: LoadingHandler;
  del: LoadingHandler;
  update: LoadingHandler;
}

export const routesInitialState: RoutesState = {
  list: {
    items: [],
    ...InitialLoadingHandler,
  },
  add: InitialLoadingHandler,
  del: InitialLoadingHandler,
  update: InitialLoadingHandler,
};
