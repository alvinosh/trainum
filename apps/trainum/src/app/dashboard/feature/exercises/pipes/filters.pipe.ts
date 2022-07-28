import { Pipe, PipeTransform } from '@angular/core';
import { Exercise } from '@trainum/models/entities';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(
    items: Exercise[],
    filters: string[],
    search: string = ''
  ): Exercise[] {
    items = items.filter((x) =>
      x.name.toLowerCase().includes(search.toLowerCase())
    );

    if (filters.length == 0) return items;
    return items.filter(
      (item) =>
        item.targets.map((x) => x.name).filter((y) => filters.includes(y ?? ''))
          .length > 0
    );
  }
}
