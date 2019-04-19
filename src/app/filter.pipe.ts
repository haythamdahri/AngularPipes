import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filteringString: string, propName: string): any {
    if (filteringString.length === 0) {
      return value;
    }
    console.log(value);
    console.log(filteringString);
    console.log(propName);
    let resultsArray: any[] = [];
    for (const item of value) {
      if (item[propName] === filteringString) {
        resultsArray.push(item);
      }
    }
    console.log(resultsArray);
    return resultsArray;
  }

}
