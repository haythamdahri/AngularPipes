import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  transform(value: any, ...args): any {
    if( (<string>value).length > args[0] ){
      return (<string>value).substr(0, args[0]) + '...';
    }
    return value;
  }
}
