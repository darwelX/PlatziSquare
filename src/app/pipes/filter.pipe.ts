import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(lugares: any[], field : string, value : any): any {
    if(!lugares) return [];
    if(!value || value.length == 0) return lugares;

    return lugares.filter(it => 
      it[field].toLowerCase().indexOf(value.toLowerCase()) !=-1);;
  }

}
