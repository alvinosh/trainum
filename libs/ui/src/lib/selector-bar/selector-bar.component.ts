import { ChangeDetectionStrategy, Component } from '@angular/core';
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

  searchActive = false;
  setSearchActive(active: boolean, $event: any = null) {
    if (event) event.stopPropagation();
    this.searchActive = active;
  }
}
