import { AddEditMode } from 'src/app/shared/utils/enums/add-edit-mode.enum';
import { Route } from './route.interface';

export interface AddEditRouteDialogData {
  route?: Route;
  mode: AddEditMode;
}
