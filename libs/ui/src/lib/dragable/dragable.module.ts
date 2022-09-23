import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragableDirective } from './dragable.directive';

@NgModule({
  declarations: [DragableDirective],
  imports: [CommonModule],
  exports: [DragableDirective],
})
export class DragableModule {}
