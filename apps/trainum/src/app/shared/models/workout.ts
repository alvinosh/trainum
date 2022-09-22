import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Exercise } from '@trainum/models/entities';

export interface CreateSetForm {
  exercise: FormControl<Exercise | null>;
  weight: FormControl<number | null>;
  reps: FormControl<number | null>;
  time: FormControl<number | null>;
  rir: FormControl<number | null>;
}

export interface createWorkoutForm {
  name: FormControl<string | null>;
  sets: FormArray<FormGroup<CreateSetForm>>;
}
