import { AddEditMode } from 'src/app/shared/utils/enums/add-edit-mode.enum';
import { Vehicle } from './vehicle.interface';

export interface AddEditVehicleDialogData {
  vehicle?: Vehicle;
  mode: AddEditMode;
}
