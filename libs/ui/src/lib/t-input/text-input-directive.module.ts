import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputDirective } from './text-input.directive';

@NgModule({
  declarations: [TextInputDirective],
  imports: [CommonModule],
  exports: [TextInputDirective],
})
export class TextInputDirectiveModule {}
