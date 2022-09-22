import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ExpandMenuType, InputTypes } from '@trainum/types';
import { CreateWorkoutDto } from '@trainum/models/workouts';
import {
  CreateExerciseForm,
  CreateSetForm,
  createWorkoutForm,
} from '../../../shared/models';
import { Exercise } from '@trainum/models/entities';
import { ExerciseService } from '../../data-access/services/exercise.service';
import { ExerciseType } from '@trainum/models/enums';

@Component({
  selector: 'trainum-create-workout-form',
  templateUrl: './create-workout-form.component.html',
  styleUrls: ['./create-workout-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateWorkoutFormComponent {
  InputType = InputTypes;
  ExpandMenuType = ExpandMenuType;

  exercisePageExpanded = false;

  exercises: Exercise[] = [];

  workoutForm: FormGroup = new FormGroup<createWorkoutForm>({
    name: new FormControl<string>('', [Validators.required]),
    exercises: new FormArray<FormGroup<CreateExerciseForm>>(
      [],
      [Validators.required]
    ),
  });

  constructor(private exerciseService: ExerciseService) {
    this.exerciseService.loadExercises();
    this.exerciseService.getExercises().subscribe((exercises) => {
      this.exercises = exercises;
    });
  }

  get exerciseArray() {
    return this.workoutForm.controls['exercises'] as FormArray<
      FormGroup<CreateExerciseForm>
    >;
  }

  openExercisesPage() {
    this.exercisePageExpanded = true;
  }

  closeExercisesPage() {
    this.exercisePageExpanded = false;
  }

  addExercise(exercise: Exercise) {
    const exerciseGroup = new FormGroup<CreateExerciseForm>({
      exercise: new FormControl(exercise),
      sets: new FormArray<FormGroup<CreateSetForm>>([]),
    });
    this.exerciseArray.push(exerciseGroup);
    this.closeExercisesPage();
  }

  deleteExercise(exercise: Exercise) {
    const idx = this.exerciseArray.value.findIndex((x) => {
      return x.exercise?.name == exercise.name;
    });

    this.exerciseArray.removeAt(idx);
  }

  addSet(form: FormGroup<CreateExerciseForm>) {
    const setGroup = new FormGroup<CreateSetForm>({
      type: new FormControl(form.controls.exercise.value?.type as ExerciseType),
      reps: new FormControl(null),
      rir: new FormControl(null),
      time: new FormControl(null),
      weight: new FormControl(null),
    });
    form.controls.sets.push(setGroup);
  }
}
