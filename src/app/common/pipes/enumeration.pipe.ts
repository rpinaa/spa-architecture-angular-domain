import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumeration'
})
export class EnumerationPipe implements PipeTransform {

  transform(value: number, args?: number): string {
    return value ? ('0' + value).slice(-args) : value + '';
  }
}
