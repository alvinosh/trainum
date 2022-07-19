import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { faCog, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { TopbarEvent } from '@trainum/types';

@Component({
  selector: 'trainum-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopbarComponent {
  TopbarEvent = TopbarEvent;
  SettingsIcon = faCog;
  UserIcon = faUserAlt;

  @Input() title = 'TopBar';
  @Output() topbarEvent = new EventEmitter<TopbarEvent>();

  onClick(event: TopbarEvent) {
    this.topbarEvent.emit(event);
  }
}
