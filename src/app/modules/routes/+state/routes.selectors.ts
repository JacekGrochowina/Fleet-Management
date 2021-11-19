import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/+state/app.state';
import { LoadingHandler } from 'src/app/shared/utils/interfaces/loading-handler.interface';
import { RoutesListState } from './interfaces/routes-list.interface';
import { RoutesState } from './routes.state';

const selectRoutes = (state: AppState) => state.routes;

// ========== Selectors List
const selectRoutesList = createSelector(
  selectRoutes,
  (state: RoutesState) => state.list
);

// Items
export const selectRoutesListItems = createSelector(
  selectRoutesList,
  (state: RoutesListState) => state.items
);

// Loading
export const selectRoutesListLoading = createSelector(
  selectRoutesList,
  (state: RoutesListState) => state.loading
);

// Success
export const selectRoutesListSuccess = createSelector(
  selectRoutesList,
  (state: RoutesListState) => state.success
);

// Error
export const selectRoutesListError = createSelector(
  selectRoutesList,
  (state: RoutesListState) => state.error
);

// ========== Selectors Add
const selectRoutesAdd = createSelector(
  selectRoutes,
  (state: RoutesState) => state.add
);

// Loading
export const selectRoutesAddLoading = createSelector(
  selectRoutesAdd,
  (state: LoadingHandler) => state.loading
);

// Success
export const selectRoutesAddSuccess = createSelector(
  selectRoutesAdd,
  (state: LoadingHandler) => state.success
);

// Error
export const selectRoutesAddError = createSelector(
  selectRoutesAdd,
  (state: LoadingHandler) => state.error
);

// ========== Selectors Del
const selectRoutesDel = createSelector(
  selectRoutes,
  (state: RoutesState) => state.del
);

// Loading
export const selectRoutesDelLoading = createSelector(
  selectRoutesDel,
  (state: LoadingHandler) => state.loading
);

// Success
export const selectRoutesDelSuccess = createSelector(
  selectRoutesDel,
  (state: LoadingHandler) => state.success
);

// Error
export const selectRoutesDelError = createSelector(
  selectRoutesDel,
  (state: LoadingHandler) => state.error
);

// ========== Selectors Update
const selectRoutesUpdate = createSelector(
  selectRoutes,
  (state: RoutesState) => state.update
);

// Loading
export const selectRoutesUpdateLoading = createSelector(
  selectRoutesUpdate,
  (state: LoadingHandler) => state.loading
);

// Success
export const selectRoutesUpdateSuccess = createSelector(
  selectRoutesUpdate,
  (state: LoadingHandler) => state.success
);

// Error
export const selectRoutesUpdateError = createSelector(
  selectRoutesUpdate,
  (state: LoadingHandler) => state.error
);
