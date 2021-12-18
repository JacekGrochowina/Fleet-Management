import { HttpErrorResponse } from '@angular/common/http';

export interface LoadingHandler {
  loading: boolean;
  success: boolean;
  error: HttpErrorResponse | null;
}
