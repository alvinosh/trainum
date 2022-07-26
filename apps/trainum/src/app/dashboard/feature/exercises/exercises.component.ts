import { Component } from '@angular/core';
import { Filter, SelectEvent } from '@trainum/types';

@Component({
  selector: 'trainum-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css'],
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

  onSelectEvent(event: SelectEvent) {
    switch (event.name) {
      case 'add':
        console.log('OPEN ADD EXERCISE SCREEN');
        break;
      case 'search':
        console.log('SEARCH', event.keyword);
        break;
      case 'filter':
        console.log('FILTER', event.keywords);
        break;
    }
  }
}