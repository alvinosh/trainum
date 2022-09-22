import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Exercise } from '@trainum/models/entities';
import { ExerciseType } from '@trainum/models/enums';

export interface CreateSetForm {
  type: FormControl<ExerciseType | null>;
  weight: FormControl<number | null>;
  reps: FormControl<number | null>;
  time: FormControl<number | null>;
  rir: FormControl<number | null>;
}

export interface CreateExerciseForm {
  exercise: FormControl<Exercise | null>;
  sets: FormArray<FormGroup<CreateSetForm>>;
}

export interface createWorkoutForm {
  name: FormControl<string | null>;
  exercises: FormArray<FormGroup<CreateExerciseForm>>;
}
