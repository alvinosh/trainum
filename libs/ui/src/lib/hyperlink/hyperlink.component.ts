import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'trainum-hyperlink',
  templateUrl: './hyperlink.component.html',
  styleUrls: ['./hyperlink.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HyperlinkComponent {
  @Input() text = 'Hyperlink';
}
