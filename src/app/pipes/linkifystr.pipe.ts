import { Pipe, PipeTransform } from '@angular/core';
import linkifyStr from 'linkifyjs/string';
@Pipe({
  name: 'linkifystr'
})
export class LinkifystrPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value ? linkifyStr(value, {target: '_system'}) : value;
  }

}
