import { ChangeDetectionStrategy, Component, Input, Self } from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'trainum-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextInputComponent implements ControlValueAccessor {
  @Input() label = ' Text Input ';

  input_value = '';
  disabled = false;

  errors: ValidationErrors | null | undefined;

  constructor(@Self() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  onBlur(): void {
    this.errors = this.ngControl.control?.errors;
  }

  onChange: (value: string) => void = () => {
    return;
  };
  onTouch: () => void = () => {
    return;
  };

  set value(val: string) {
    this.input_value = val;
    this.onChange(this.input_value);
    this.onTouch();
  }

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
