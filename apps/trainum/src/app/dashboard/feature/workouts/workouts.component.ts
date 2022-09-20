import { Component } from '@angular/core';
import { Exercise, Workout } from '@trainum/models/entities';
import { Filter, SelectEvent } from '@trainum/types';
import { Targets } from '@trainum/models/enums';
import { WorkoutService } from '../../data-access/services/workouts.service';

@Component({
  selector: 'trainum-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss'],
})
export class WorkoutsComponent {
  workouts: Workout[] = [];

  constructor(private workoutService: WorkoutService) {
    this.workoutService.loadExercises();
    this.workoutService.getExercises().subscribe((workouts) => {
      this.workouts = workouts;
    });
  }
}
