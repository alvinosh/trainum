import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { faDumbbell, faRunning } from '@fortawesome/free-solid-svg-icons';
import { Exercise } from '@trainum/models/entities';

@Component({
  selector: 'trainum-exercise-card',
  templateUrl: './exercise-card.component.html',
  styleUrls: ['./exercise-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseCardComponent {
  TargetIcon = faRunning;
  EquipmentIcon = faDumbbell;

  @Input()
  draggable = false;

  @Output() draggedAway: EventEmitter<Exercise> = new EventEmitter<Exercise>();

  @Input() exercise: Exercise = {
    id: 0,
    name: 'Test',
    description: 'Test',
    type: 'test',
    createdAt: new Date(),
    updatedAt: new Date(),
    images: [],
    targets: [],
    equipment: [],
    userId: 0,
  };

  dragged($event: boolean) {
    if (this.draggable && $event) {
      this.draggedAway.emit(this.exercise);
    }
  }
}
