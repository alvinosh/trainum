import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorBarComponent } from './selector-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TextInputDirectiveModule } from '../t-input/text-input-directive.module';
import { StopPropagationModule } from '../stop-propagation/stop-propagation.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BlobModule } from '../blob/blob.module';
import { ExpandMenuModule } from '../expand-menu/expand-menu.module';
import { ActivePipe } from './pipes/active.pipe';

@NgModule({
  declarations: [SelectorBarComponent, ActivePipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    TextInputDirectiveModule,
    StopPropagationModule,
    BlobModule,
    ExpandMenuModule,
  ],
  exports: [SelectorBarComponent],
})
export class SelectorBarModule {}
