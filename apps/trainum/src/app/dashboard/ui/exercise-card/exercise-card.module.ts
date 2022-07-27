import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseCardComponent } from './exercise-card.component';

@NgModule({
  declarations: [ExerciseCardComponent],
  imports: [CommonModule],
  exports: [ExerciseCardComponent],
})
export class ExerciseCardModule {}
