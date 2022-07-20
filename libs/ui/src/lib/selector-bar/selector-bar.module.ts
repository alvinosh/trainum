import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorBarComponent } from './selector-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TextInputModule } from '../text-input/text-input.module';

@NgModule({
  declarations: [SelectorBarComponent],
  imports: [CommonModule, FontAwesomeModule, TextInputModule],
  exports: [SelectorBarComponent],
})
export class SelectorBarModule {}
