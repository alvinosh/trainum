import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from '@trainum/types';
@Component({
  selector: 'trainum-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnChanges {
  constructor(private router: Router) {}

  @Input() nav_items: NavItem[] = [];
  @Input() active_nav_index = 2;

  active_nav_item: NavItem | undefined = undefined;

  ngOnChanges(): void {
    this.active_nav_item = this.nav_items[this.active_nav_index];
  }

  setActiveNavItem(nav_item: NavItem) {
    this.active_nav_item = nav_item;
    this.router.navigate(['dashboard', nav_item.url]);
  }
}
