import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {


  transform(array: Info[], args: any): Info[] {
    if (!array) return null;


    array.sort((a: Info, b: Info) => {

      if (a[args] < b[args]) {
        return 1;
      } else if (a[args] > b[args]) {
        return -1;
      } else {
        return 0;
      }
    });

    if (args == 'name') array.reverse();

    return array;
  }
}
