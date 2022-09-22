import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateWorkoutFormComponent } from './create-workout-form.component';
import {
  ButtonModule,
  ExpandMenuModule,
  HyperlinkModule,
  TextInputDirectiveModule,
  TextInputModule,
} from '@trainum/ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExercisesModule } from '../../feature/exercises/exercises.module';
import { ExerciseCardModule } from '../exercise-card/exercise-card.module';
import { CreateSetFormModule } from '../create-set-form/create-set-form.module';

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
    ExerciseCardModule,
    HyperlinkModule,
    CreateSetFormModule,
  ],
  exports: [CreateWorkoutFormComponent],
})
export class CreateWorkoutFormModule {}
