import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {
  
  transform(value: string, maxCharacters = 50, ellipsisAppend: string ) {
    if (value && value.length > maxCharacters) {
      value = value.slice(0, maxCharacters);
      value = value.concat(ellipsisAppend);
    }
    return value;
  }
}
