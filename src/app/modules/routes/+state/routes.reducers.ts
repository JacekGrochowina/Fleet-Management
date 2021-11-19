import { InitialLoadingHandler } from 'src/app/shared/utils/models/initial-loading-handler.model';
import { RoutesActions, RoutesActionTypes } from './routes.actions';
import { routesInitialState, RoutesState } from './routes.state';

export function RoutesReducer(
  state = routesInitialState,
  action: RoutesActions
): RoutesState {
  switch (action.type) {
    // ========== Get Routes
    case RoutesActionTypes.get: {
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

    case RoutesActionTypes.getSuccess: {
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

    case RoutesActionTypes.getFail: {
      return {
        ...state,
        list: {
          ...state.list,
          loading: false,
          error: action.payload.error,
        },
      };
    }

    // ========== Add Route
    case RoutesActionTypes.add: {
      return {
        ...state,
        add: {
          loading: true,
          success: false,
          error: null,
        },
      };
    }

    case RoutesActionTypes.addSuccess: {
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

    case RoutesActionTypes.addFail: {
      return {
        ...state,
        add: {
          ...state.add,
          loading: false,
          error: action.payload.error,
        },
      };
    }

    case RoutesActionTypes.addClear: {
      return {
        ...state,
        add: InitialLoadingHandler,
      };
    }

    // ========== Del Route
    case RoutesActionTypes.del: {
      return {
        ...state,
        del: {
          loading: true,
          success: false,
          error: null,
        },
      };
    }

    case RoutesActionTypes.delSuccess: {
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

    case RoutesActionTypes.delFail: {
      return {
        ...state,
        del: {
          ...state.add,
          loading: false,
          error: action.payload.error,
        },
      };
    }

    case RoutesActionTypes.delClear: {
      return {
        ...state,
        del: InitialLoadingHandler,
      };
    }

    // ========== Update Route
    case RoutesActionTypes.update: {
      return {
        ...state,
        update: {
          loading: true,
          success: false,
          error: null,
        },
      };
    }

    case RoutesActionTypes.updateSuccess: {
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

    case RoutesActionTypes.updateFail: {
      return {
        ...state,
        update: {
          ...state.add,
          loading: false,
          error: action.payload.error,
        },
      };
    }

    case RoutesActionTypes.updateClear: {
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
