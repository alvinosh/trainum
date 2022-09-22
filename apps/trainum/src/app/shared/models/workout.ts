import { FormArray, FormControl, FormGroup } from '@angular/forms';

export interface CreateSetForm {
  date: FormControl<Date | null>;
  exerciseId: FormControl<number | null>;
  weight: FormControl<number | null>;
  reps: FormControl<number | null>;
  time: FormControl<number | null>;
  rir: FormControl<number | null>;
}

export interface createWorkoutForm {
  name: FormControl<string | null>;
  sets: FormArray<FormGroup<CreateSetForm>>;
}
