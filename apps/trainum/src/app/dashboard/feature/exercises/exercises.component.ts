import { Component, EventEmitter, Output } from '@angular/core';
import { Exercise } from '@trainum/models/entities';
import { Filter, SelectEvent } from '@trainum/types';
import { ExerciseService } from '../../data-access/services/exercise.service';
import { Targets } from '@trainum/models/enums';

@Component({
  selector: 'trainum-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss'],
})
export class ExercisesComponent {
  filters: Filter[] = Object.values(Targets).map((value) => ({
    active: false,
    label: value.charAt(0).toUpperCase() + value.slice(1),
    value: value,
  }));

  active_filters: string[] = [];
  active_search = '';

  exercises: Exercise[] = [];

  @Output() exerciseSelected: EventEmitter<Exercise> =
    new EventEmitter<Exercise>();

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

  exerciseClicked($event: Exercise) {
    this.exerciseSelected.emit($event);
  }
}
