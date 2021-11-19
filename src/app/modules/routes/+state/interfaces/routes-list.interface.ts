import { LoadingHandler } from 'src/app/shared/utils/interfaces/loading-handler.interface';
import { Route } from '../../utils/interfaces/route.interface';

export interface RoutesListState extends LoadingHandler {
  items: Route[];
}
