import { Component, OnInit } from '@angular/core';

import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'trainum-auth-shell',
  templateUrl: './auth-shell.component.html',
  styleUrls: ['./auth-shell.component.scss'],
})
export class AuthShellComponent implements OnInit {
  LogoIcon = faDumbbell;

  constructor() {}

  ngOnInit(): void {}
}
