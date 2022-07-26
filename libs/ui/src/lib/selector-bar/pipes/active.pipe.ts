import { Pipe, PipeTransform } from '@angular/core';
import { Filter } from '../../types/filter';

@Pipe({
  name: 'active',
})
export class ActivePipe implements PipeTransform {
  transform(items: Filter[]): Filter[] {
    return items.filter((item) => item.active);
  }
}
