import { Pipe, PipeTransform } from '@angular/core';
import { Equipment, Target } from '@trainum/models/entities';

@Pipe({
  name: 'overflow',
})
export class OverflowPipe implements PipeTransform {
  transform(
    items: Target[] | Equipment[],
    sep: string = ',',
    overflow: number = 3,
    overflow_suffix: string = '...'
  ): string {
    let output: string = items
      .slice(0, overflow)
      .map((x) => x.name)
      .join(sep);

    if (items.length >= overflow) {
      output += overflow_suffix;
    }
    return output;
  }
}
