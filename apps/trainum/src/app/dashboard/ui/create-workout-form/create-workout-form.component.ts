import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { InputTypes } from '@trainum/types';
import { CreateWorkoutDto } from '@trainum/models/workouts';
import { CreateSetForm, createWorkoutForm } from '../../../shared/models';

@Component({
  selector: 'trainum-create-workout-form',
  templateUrl: './create-workout-form.component.html',
  styleUrls: ['./create-workout-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateWorkoutFormComponent {
  InputType = InputTypes;

  workoutForm: FormGroup = new FormGroup<createWorkoutForm>({
    name: new FormControl<string>('', [Validators.required]),
    sets: new FormArray<FormGroup<CreateSetForm>>([], [Validators.required]),
  });
}
