import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ExpandMenuType, InputTypes } from '@trainum/types';
import { CreateWorkoutDto } from '@trainum/models/workouts';
import { CreateSetForm, createWorkoutForm } from '../../../shared/models';
import { Exercise } from '@trainum/models/entities';
import { ExerciseService } from '../../data-access/services/exercise.service';

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
    sets: new FormArray<FormGroup<CreateSetForm>>([], [Validators.required]),
  });

  constructor(private exerciseService: ExerciseService) {
    this.exerciseService.loadExercises();
    this.exerciseService.getExercises().subscribe((exercises) => {
      this.exercises = exercises;
    });
  }

  get sets() {
    return this.workoutForm.controls['sets'] as FormArray<
      FormGroup<CreateSetForm>
    >;
  }

  openExercisesPage() {
    this.exercisePageExpanded = true;
  }

  closeExercisesPage() {
    this.exercisePageExpanded = false;
  }

  addExercise(exercise: Exercise) {
    const setGroup = new FormGroup<CreateSetForm>({
      exercise: new FormControl(exercise),
      reps: new FormControl(null),
      rir: new FormControl(null),
      time: new FormControl(null),
      weight: new FormControl(null),
    });
    this.sets.push(setGroup);
    this.closeExercisesPage();
  }
}
