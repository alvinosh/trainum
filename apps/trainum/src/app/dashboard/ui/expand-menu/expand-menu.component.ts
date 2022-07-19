import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ExpandMenuType } from '@trainum/types';

@Component({
  selector: 'trainum-expand-menu',
  templateUrl: './expand-menu.component.html',
  styleUrls: ['./expand-menu.component.scss'],
})
export class ExpandMenuComponent {
  ExpandMenuType = ExpandMenuType;
  @Input() expanded = false;
  @Input() type: ExpandMenuType = ExpandMenuType.Left;
}
