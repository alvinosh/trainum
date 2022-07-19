import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { ValidationError } from '../types';

@Pipe({
  name: 'validation',
})
export class ValidationPipe implements PipeTransform {
  transform(
    value: ValidationErrors | undefined | null,
    label: string
  ): ValidationError[] {
    const output: ValidationError[] = [];
    for (const key in value) {
      output.push({
        message: this.mapError(key, value[key], label),
        error: key,
      });
    }
    return output;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private mapError(key: string, value: any, label: string): string {
    switch (key) {
      case 'required':
        return `${label} is required`;
      case 'minlength':
        return `${label} must be at least ${value.requiredLength} characters long`;
      case 'maxlength':
        return `${label} must be at most ${value.requiredLength} characters long`;
      case 'email':
        return `${label} must be a valid email address`;
      case 'min':
        return `${label} must be at least ${value.min}`;
      case 'max':
        return `${label} must be at most ${value.max}`;
      case 'pattern':
        return `${label} must match the pattern ${value.requiredPattern}`;
      case 'exists':
        return `${label} already exists`;
      case 'notmatching':
        return `${label} does not match ${value}`;
      case 'empty':
        return ``;
      default:
        return `${label} Has An Error`;
    }
  }
}
