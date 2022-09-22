import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { ExpandMenuType } from '../types/expand-menu-types';

const ANIMATION_SPEED = '0.2s';

@Component({
  selector: 'trainum-expand-menu',
  templateUrl: './expand-menu.component.html',
  styleUrls: ['./expand-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('expanded', [
      state(
        'expended-left',
        style({
          left: '0px',
        })
      ),
      state(
        'closed-left',
        style({
          left: '-100%',
        })
      ),
      state(
        'expended-right',
        style({
          right: '0px',
        })
      ),
      state(
        'closed-right',
        style({
          right: '-100%',
        })
      ),
      state(
        'expended-top',
        style({
          top: '0px',
        })
      ),
      state(
        'closed-top',
        style({
          top: '-100%',
        })
      ),
      state(
        'expended-bottom',
        style({
          bottom: '0px',
        })
      ),
      state(
        'closed-bottom',
        style({
          bottom: '-100%',
        })
      ),
      transition('* <=> *', [animate(ANIMATION_SPEED)]),
    ]),
  ],
})
export class ExpandMenuComponent implements OnChanges {
  ExpandMenuType = ExpandMenuType;
  @Input() expanded = false;
  @Input() type: ExpandMenuType = ExpandMenuType.Left;

  view = false;

  ngOnChanges() {
    if (this.expanded) {
      this.view = this.expanded;
    }
  }

  updateViewEnd() {
    this.expanded ? (this.view = true) : (this.view = false);
  }

  getState(): string {
    switch (this.type) {
      case ExpandMenuType.Left:
        return this.expanded ? 'expanded-left' : 'closed-left';
      case ExpandMenuType.Right:
        return this.expanded ? 'expanded-right' : 'closed-right';
      case ExpandMenuType.Bottom:
        return this.expanded ? 'expanded-bottom' : 'closed-bottom';
    }
  }
}
