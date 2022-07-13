import { AbstractControl } from '@angular/forms';
import { map } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const EmailExists =
  (authService: AuthService) => (control: AbstractControl) => {
    return authService.emailExists(control.value).pipe(
      map((res) => {
        return res ? { exists: true } : null;
      })
    );
  };
