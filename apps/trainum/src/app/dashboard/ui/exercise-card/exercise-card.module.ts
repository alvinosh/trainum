import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseCardComponent } from './exercise-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [ExerciseCardComponent],
  imports: [CommonModule, SharedModule, FontAwesomeModule],
  exports: [ExerciseCardComponent],
})
export class ExerciseCardModule {}
