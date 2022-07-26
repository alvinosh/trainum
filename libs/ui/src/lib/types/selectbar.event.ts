export type SelectEvent = AddEvent | SearchEvent | FilterEvent;

export interface AddEvent {
  name: string;
}

export interface SearchEvent {
  name: string;
  keyword: string | null;
}

export interface FilterEvent {
  name: string;
  keywords: string[];
}
