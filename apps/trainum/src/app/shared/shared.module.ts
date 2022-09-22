import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverflowPipe } from './pipes/overflow.pipe';

@NgModule({
  declarations: [OverflowPipe],
  imports: [CommonModule],
  exports: [OverflowPipe],
})
export class SharedModule {}
