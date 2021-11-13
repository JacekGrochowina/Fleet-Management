import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/+state/app.state';
import { LoadingHandler } from 'src/app/shared/utils/interfaces/loading-handler.interface';
import { VehiclesListState } from './interfaces/vehicles-list.interface';
import { VehiclesState } from './vehicles.state';

const selectVehicles = (state: AppState) => state.vehicles;

// ========== Selectors List
const selectVehiclesList = createSelector(
  selectVehicles,
  (state: VehiclesState) => state.list
);

// Items
export const selectVehiclesListItems = createSelector(
  selectVehiclesList,
  (state: VehiclesListState) => state.items
);

// Loading
export const selectVehiclesListLoading = createSelector(
  selectVehiclesList,
  (state: VehiclesListState) => state.loading
);

// Success
export const selectVehiclesListSuccess = createSelector(
  selectVehiclesList,
  (state: VehiclesListState) => state.success
);

// Error
export const selectVehiclesListError = createSelector(
  selectVehiclesList,
  (state: VehiclesListState) => state.error
);

// ========== Selectors Add
const selectVehiclesAdd = createSelector(
  selectVehicles,
  (state: VehiclesState) => state.add
);

// Loading
export const selectVehiclesAddLoading = createSelector(
  selectVehiclesAdd,
  (state: LoadingHandler) => state.loading
);

// Success
export const selectVehiclesAddSuccess = createSelector(
  selectVehiclesAdd,
  (state: LoadingHandler) => state.success
);

// Error
export const selectVehiclesAddError = createSelector(
  selectVehiclesAdd,
  (state: LoadingHandler) => state.error
);

// ========== Selectors Del
const selectVehiclesDel = createSelector(
  selectVehicles,
  (state: VehiclesState) => state.del
);

// Loading
export const selectVehiclesDelLoading = createSelector(
  selectVehiclesDel,
  (state: LoadingHandler) => state.loading
);

// Success
export const selectVehiclesDelSuccess = createSelector(
  selectVehiclesDel,
  (state: LoadingHandler) => state.success
);

// Error
export const selectVehiclesDelError = createSelector(
  selectVehiclesDel,
  (state: LoadingHandler) => state.error
);

// ========== Selectors Update
const selectVehiclesUpdate = createSelector(
  selectVehicles,
  (state: VehiclesState) => state.update
);

// Loading
export const selectVehiclesUpdateLoading = createSelector(
  selectVehiclesUpdate,
  (state: LoadingHandler) => state.loading
);

// Success
export const selectVehiclesUpdateSuccess = createSelector(
  selectVehiclesUpdate,
  (state: LoadingHandler) => state.success
);

// Error
export const selectVehiclesUpdateError = createSelector(
  selectVehiclesUpdate,
  (state: LoadingHandler) => state.error
);
