import { Component } from '@angular/core';
import { Exercise } from '@trainum/models/entities';
import { Filter, SelectEvent } from '@trainum/types';
import { ExerciseService } from '../../data-access/services/exercise.service';

@Component({
  selector: 'trainum-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss'],
})
export class ExercisesComponent {
  filters: Filter[] = [
    {
      active: false,
      label: 'Biceps',
      value: 'biceps',
    },
    {
      active: false,
      label: 'Chest',
      value: 'chest',
    },
    {
      active: false,
      label: 'Forearm',
      value: 'forearm',
    },
    {
      active: false,
      label: 'Legs',
      value: 'legs',
    },
    {
      active: false,
      label: 'Shoulders',
      value: 'shoulders',
    },
    {
      active: false,
      label: 'Triceps',
      value: 'triceps',
    },
    {
      active: false,
      label: 'Back',
      value: 'back',
    },
    {
      active: false,
      label: 'Core',
      value: 'core',
    },
    {
      active: false,
      label: 'Abs',
      value: 'abs',
    },
    {
      active: false,
      label: 'Cardio',
      value: 'cardio',
    },
    {
      active: false,
      label: 'Other',
      value: 'other',
    },
  ];

  active_filters: string[] = [];
  active_search = '';

  exercises: Exercise[] = [];

  onSelectEvent(event: SelectEvent) {
    switch (event.name) {
      case 'add':
        console.log('OPEN ADD EXERCISE SCREEN');
        break;
      case 'search':
        this.active_search = event.keyword ?? '';
        break;
      case 'filter':
        this.active_filters = event.keywords;
        break;
    }
  }

  constructor(private exerciseService: ExerciseService) {
    this.exerciseService.loadExercises();
    this.exerciseService.getExercises().subscribe((exercises) => {
      this.exercises = exercises;
    });
  }
}
