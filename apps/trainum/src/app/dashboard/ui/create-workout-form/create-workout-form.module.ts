import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateWorkoutFormComponent } from './create-workout-form.component';
import { TextInputDirectiveModule, TextInputModule } from '@trainum/ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateWorkoutFormComponent],
  imports: [
    CommonModule,
    TextInputModule,
    TextInputDirectiveModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [CreateWorkoutFormComponent],
})
export class CreateWorkoutFormModule {}
