import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [TopbarComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [TopbarComponent],
})
export class TopbarModule {}
