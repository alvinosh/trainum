import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Exercise } from '@trainum/models/entities';

@Component({
  selector: 'trainum-exercise-card',
  templateUrl: './exercise-card.component.html',
  styleUrls: ['./exercise-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseCardComponent {
  @Input() exercise: Exercise = {
    id: 0,
    name: 'Test',
    description: 'Test',
    type: 'test',
    createdAt: new Date(),
    updatedAt: new Date(),
    images: [],
    targets: [],
    userId: 0,
  };
}
