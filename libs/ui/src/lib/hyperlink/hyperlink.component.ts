import { Component, Input } from '@angular/core';

@Component({
  selector: 'trainum-hyperlink',
  templateUrl: './hyperlink.component.html',
  styleUrls: ['./hyperlink.component.scss'],
})
export class HyperlinkComponent {
  @Input() text = 'Hyperlink';
}
