import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorBarComponent } from './selector-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TextInputDirectiveModule } from '../t-input/text-input-directive.module';

@NgModule({
  declarations: [SelectorBarComponent],
  imports: [CommonModule, FontAwesomeModule, TextInputDirectiveModule],
  exports: [SelectorBarComponent],
})
export class SelectorBarModule {}
