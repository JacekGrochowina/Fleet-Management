import { InitialLoadingHandler } from 'src/app/shared/utils/models/initial-loading-handler.model';
import { VehiclesActions, VehiclesActionTypes } from './vehicles.actions';
import { vehiclesInitialState, VehiclesState } from './vehicles.state';

export function VehiclesReducer(
  state = vehiclesInitialState,
  action: VehiclesActions
): VehiclesState {
  switch (action.type) {
    // ========== Get Vehicles
    case VehiclesActionTypes.get: {
      return {
        ...state,
        list: {
          ...state.list,
          loading: true,
          success: false,
          error: null,
        },
      };
    }

    case VehiclesActionTypes.getSuccess: {
      return {
        ...state,
        list: {
          items: action.payload,
          loading: false,
          success: true,
          error: null,
        },
      };
    }

    case VehiclesActionTypes.getFail: {
      return {
        ...state,
        list: {
          ...state.list,
          loading: false,
          error: action.payload,
        },
      };
    }

    // ========== Add Vehicle
    case VehiclesActionTypes.add: {
      return {
        ...state,
        add: {
          loading: true,
          success: false,
          error: null,
        },
      };
    }

    case VehiclesActionTypes.addSuccess: {
      return {
        ...state,
        list: {
          ...state.list,
          loading: true,
          success: false,
          error: null,
        },
        add: {
          loading: false,
          success: true,
          error: null,
        },
      };
    }

    case VehiclesActionTypes.addFail: {
      return {
        ...state,
        add: {
          ...state.add,
          loading: false,
          error: action.payload,
        },
      };
    }

    case VehiclesActionTypes.addClear: {
      return {
        ...state,
        add: InitialLoadingHandler,
      };
    }

    // ========== Del Vehicle
    case VehiclesActionTypes.del: {
      return {
        ...state,
        del: {
          loading: true,
          success: false,
          error: null,
        },
      };
    }

    case VehiclesActionTypes.delSuccess: {
      return {
        ...state,
        list: {
          ...state.list,
          loading: true,
          success: false,
          error: null,
        },
        del: {
          loading: false,
          success: true,
          error: null,
        },
      };
    }

    case VehiclesActionTypes.delFail: {
      return {
        ...state,
        del: {
          ...state.add,
          loading: false,
          error: action.payload,
        },
      };
    }

    case VehiclesActionTypes.delClear: {
      return {
        ...state,
        del: InitialLoadingHandler,
      };
    }

    // ========== Update Vehicle
    case VehiclesActionTypes.update: {
      return {
        ...state,
        update: {
          loading: true,
          success: false,
          error: null,
        },
      };
    }

    case VehiclesActionTypes.updateSuccess: {
      return {
        ...state,
        list: {
          ...state.list,
          loading: true,
          success: false,
          error: null,
        },
        update: {
          loading: false,
          success: true,
          error: null,
        },
      };
    }

    case VehiclesActionTypes.updateFail: {
      return {
        ...state,
        update: {
          ...state.add,
          loading: false,
          error: action.payload,
        },
      };
    }

    case VehiclesActionTypes.updateClear: {
      return {
        ...state,
        update: InitialLoadingHandler,
      };
    }

    default:
      return {
        ...state,
      };
  }
}
