import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hashtag'
})
export class HashtagPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return (value && args) ? value.replace(/#/g, '') : value;
  }
}
