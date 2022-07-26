import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
} from '@angular/core';
import { faCross, faXmark } from '@fortawesome/free-solid-svg-icons';
import { BlobType } from '../types/';

@Component({
  selector: 'trainum-blob',
  templateUrl: './blob.component.html',
  styleUrls: ['./blob.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlobComponent {
  @Input() label = 'Blob';
  @Input() type: BlobType = BlobType.Static;
  @Input() active = false;

  BlobType = BlobType;

  CrossIcon = faXmark;
}
