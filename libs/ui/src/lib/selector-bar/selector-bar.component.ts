import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faFilter, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'trainum-selector-bar',
  templateUrl: './selector-bar.component.html',
  styleUrls: ['./selector-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectorBarComponent {
  addIcon = faPlus;
  searchIcon = faSearch;
  filterIcon = faFilter;
}
