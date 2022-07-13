import { AbstractControl } from '@angular/forms';
import { map } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const UsernameExists =
  (authService: AuthService) => (control: AbstractControl) => {
    return authService.usernameExists(control.value).pipe(
      map((res) => {
        return res ? { exists: true } : null;
      })
    );
  };
