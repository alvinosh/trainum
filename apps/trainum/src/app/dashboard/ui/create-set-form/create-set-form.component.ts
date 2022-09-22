import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { ExerciseType } from '@trainum/models/enums';
import { CreateSetForm } from '../../../shared/models';

@Component({
  selector: 'trainum-create-set-form',
  templateUrl: './create-set-form.component.html',
  styleUrls: ['./create-set-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateSetFormComponent {
  ExerciseType = ExerciseType;

  @Input() index = 0;
  @Input() formGroup: FormGroup<CreateSetForm> | undefined;
}
