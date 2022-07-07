import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'trainum-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextInputComponent {
  @Input() label = ' Text Input ';
}
