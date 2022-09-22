import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
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

  @ViewChild('dragable') dragableRef: ElementRef<HTMLElement> | undefined;

  @Input()
  draggable = false;
  dragging = false;
  dragStart: [number, number] = [0, 0];

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

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const deltaX = e.clientX - this.dragStart[0];
    if (this.dragableRef && this.dragging) {
      this.dragableRef.nativeElement.style.left = deltaX.toString() + 'px';
      if (
        deltaX >
        this.dragableRef.nativeElement.getBoundingClientRect().width * 0.7
      ) {
        this.draggedAway.emit(this.exercise);
      }
    }
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(e: MouseEvent) {
    if (this.dragableRef && this.dragging) {
      this.dragableRef.nativeElement.style.left = '0px';
    }
    this.dragging = false;
  }

  dragDown(e: MouseEvent) {
    this.dragStart = [e.clientX, e.clientY];
    if (this.draggable) this.dragging = true;
  }
}
