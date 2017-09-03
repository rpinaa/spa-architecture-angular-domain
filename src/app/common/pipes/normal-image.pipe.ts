import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'normalImage'
})
export class NormalImagePipe implements PipeTransform {

  transform(value: string): string {
    return value ? value.replace(/_normal/g, '') : value;
  }
}
