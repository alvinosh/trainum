import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateWorkoutFormComponent } from './create-workout-form.component';
import {
  ButtonModule,
  ExpandMenuModule,
  TextInputDirectiveModule,
  TextInputModule,
} from '@trainum/ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExerciseCardModule } from '../exercise-card/exercise-card.module';
import { ExercisesModule } from '../../feature/exercises/exercises.module';

@NgModule({
  declarations: [CreateWorkoutFormComponent],
  imports: [
    CommonModule,
    TextInputModule,
    TextInputDirectiveModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    ExpandMenuModule,
    ExercisesModule,
  ],
  exports: [CreateWorkoutFormComponent],
})
export class CreateWorkoutFormModule {}
