import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const PasswordsMatch =
  (match_control: string): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    return !!control.parent &&
      !!control.parent.value &&
      control.value === control.parent?.get(match_control)?.value
      ? null
      : { notmatching: match_control };
  };
