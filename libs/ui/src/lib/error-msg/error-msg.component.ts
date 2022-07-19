import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'trainum-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorMsgComponent {}
