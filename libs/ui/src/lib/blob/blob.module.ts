import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlobComponent } from './blob.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [BlobComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [BlobComponent],
})
export class BlobModule {}
