import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ConfirmDialogData {
  title?: string;
  message?: string;
  confirmLabel?: string;
  dismissLabel?: string;
  isAsync?: boolean;
  close$?: Observable<boolean>;
  loading$?: Observable<boolean>;
  errors$?: HttpErrorResponse;
  confirmed: Function;
}
