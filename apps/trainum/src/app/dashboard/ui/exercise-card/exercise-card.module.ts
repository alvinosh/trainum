import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseCardComponent } from './exercise-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../../../shared/shared.module';
import { DragableModule } from '@trainum/ui';

@NgModule({
  declarations: [ExerciseCardComponent],
  imports: [CommonModule, SharedModule, FontAwesomeModule, DragableModule],
  exports: [ExerciseCardComponent],
})
export class ExerciseCardModule {}
