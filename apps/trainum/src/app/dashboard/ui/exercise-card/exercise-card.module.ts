import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseCardComponent } from './exercise-card.component';
import { OverflowPipe } from './pipes/overflow.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ExerciseCardComponent, OverflowPipe],
  imports: [CommonModule, FontAwesomeModule],
  exports: [ExerciseCardComponent],
})
export class ExerciseCardModule {}
