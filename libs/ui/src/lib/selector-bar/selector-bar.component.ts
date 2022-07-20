import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'trainum-selector-bar',
  templateUrl: './selector-bar.component.html',
  styleUrls: ['./selector-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectorBarComponent {}
