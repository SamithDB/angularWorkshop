import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(value: string, maxCharacters: number = 20): string {
    const retValue = value;
    if (value && value.length > maxCharacters) {
      value = value.slice(0, maxCharacters);
      value = value.concat('...');
    }
    return value;
  }

}
