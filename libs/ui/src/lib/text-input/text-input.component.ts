import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'trainum-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextInputComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
