import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of } from 'rxjs';

export const UsernameExists: AsyncValidatorFn = (
  control: AbstractControl
): Observable<ValidationErrors | null> => {
  return of({ exists: false });
};
