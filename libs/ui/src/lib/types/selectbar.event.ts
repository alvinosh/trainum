export type SelectEvent = AddEvent | SearchEvent | FilterEvent;

export interface AddEvent {
  name: 'add';
}

export interface SearchEvent {
  name: 'search';
  keyword: string | null;
}

export interface FilterEvent {
  name: 'filter';
  keywords: string[];
}
