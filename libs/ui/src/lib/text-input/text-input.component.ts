import { Component, Input, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { InputTypes } from '../types';

@Component({
  selector: 'trainum-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent implements ControlValueAccessor {
  @Input() label = ' Text Input ';

  @Input() type = InputTypes.Text;

  input_value = '';
  disabled = false;

  constructor(@Self() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  get errors() {
    if (!this.ngControl.touched) return;
    return this.ngControl.control?.errors;
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
