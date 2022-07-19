import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from '@trainum/types';
@Component({
  selector: 'trainum-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @Input() nav_items: NavItem[] = [];
  @Input() active_nav_item: NavItem | undefined;
  @Output() nav_item_click = new EventEmitter<NavItem>();

  navClick(nav_item: NavItem) {
    this.nav_item_click.emit(nav_item);
  }
}
