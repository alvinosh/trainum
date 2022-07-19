import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faCalendarAlt,
  faDumbbell,
  faHome,
  faPencilRuler,
  faRunning,
} from '@fortawesome/free-solid-svg-icons';
import { NavItem } from '@trainum/types';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'trainum-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
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
      name: 'Workout',
      url: 'workout',
    },
    {
      icon: faRunning,
      name: 'Exercises',
      url: 'exercises',
    },
  ];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    return;
  }

  logout() {
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
