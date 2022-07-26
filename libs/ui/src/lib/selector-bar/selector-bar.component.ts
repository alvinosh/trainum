import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { faFilter, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { BlobType, ExpandMenuType, Filter, SelectEvent } from '../types/';

@Component({
  selector: 'trainum-selector-bar',
  templateUrl: './selector-bar.component.html',
  styleUrls: ['./selector-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectorBarComponent {
  constructor(private cd: ChangeDetectorRef) {}

  @Output() selectEvent = new EventEmitter<SelectEvent>();

  @Input() filters: Filter[] = [];

  BlobType = BlobType;
  ExpandMenuType = ExpandMenuType;

  addIcon = faPlus;
  searchIcon = faSearch;
  filterIcon = faFilter;

  searchActive = false;
  filterActive = false;

  searchValue = new FormControl<string | null>(null);

  onClick(component: string) {
    switch (component) {
      case 'add':
        this.setSearchActive(false);
        this.setFilterActive(false);
        this.selectEvent.emit({ name: 'add' });
        break;
      case 'search':
        this.setSearchActive(true);
        this.setFilterActive(false);
        break;
      case 'filter':
        this.setSearchActive(false);
        this.setFilterActive(!this.filterActive);
        break;
      case 'search-icon':
        this.setSearchActive(!this.searchActive);
        this.setFilterActive(false);
    }
  }

  setSearchActive(active: boolean) {
    this.searchActive = active;
  }

  searchChange() {
    this.selectEvent.emit({ name: 'search', keyword: this.searchValue.value });
  }

  resetSearch() {
    this.searchValue.setValue(null);
    this.searchChange();
  }

  setFilterActive(active: boolean) {
    this.filterActive = active;
  }

  setFilter(filter: Filter, value: boolean) {
    filter.active = value;
    this.filters = [...this.filters];
    this.cd.detectChanges();
    this.filterChange();
  }

  filterChange() {
    this.selectEvent.emit({
      name: 'filter',
      keywords: this.filters.filter((x) => x.active).map((x) => x.value) ?? [],
    });
  }
}
