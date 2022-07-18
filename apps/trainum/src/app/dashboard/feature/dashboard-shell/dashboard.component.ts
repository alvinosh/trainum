import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'trainum-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private authService: AuthService, private http: HttpClient) {}

  ngOnInit(): void {
    return;
  }

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        console.log('logged out');
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
