import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  faCalendarAlt,
  faDumbbell,
  faHome,
  faPencilRuler,
  faRunning,
} from '@fortawesome/free-solid-svg-icons';
import { ExpandMenuType, NavItem, TopbarEvent } from '@trainum/types';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'trainum-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  ExpandMenuType = ExpandMenuType;

  nav_items: NavItem[] = [
    {
      icon: faPencilRuler,
      name: 'Measurements',
      url: 'measurements',
    },
    {
      icon: faCalendarAlt,
      name: 'Calendar',
      url: 'calendar',
    },
    {
      icon: faHome,
      name: 'Home',
      url: 'home',
    },
    {
      icon: faDumbbell,
      name: 'Workouts',
      url: 'workouts',
    },
    {
      icon: faRunning,
      name: 'Exercises',
      url: 'exercises',
    },
  ];
  active_nav_item: NavItem;

  profile_expanded = false;
  settings_expanded = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private location: Location
  ) {
    const url = this.location.path().split('/')[2];
    const index = this.nav_items.findIndex((x) => x.url === url);
    this.active_nav_item = this.nav_items[index == -1 ? 0 : index];
  }

  ngOnInit(): void {
    return;
  }

  onNanvItemClick(nav_item: NavItem) {
    this.router.navigate(['dashboard', nav_item.url]);
    this.active_nav_item = nav_item;
  }

  onTopbarEvent(event: TopbarEvent) {
    switch (event) {
      case TopbarEvent.UserClick:
        this.settings_expanded = false;
        this.profile_expanded = !this.profile_expanded;
        break;
      case TopbarEvent.SettingsClick:
        this.profile_expanded = false;
        this.settings_expanded = !this.settings_expanded;
    }
  }

  removeFocus() {
    this.profile_expanded = false;
    this.settings_expanded = false;
  }

  logout() {
    console.log('logout');
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['/auth']);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
