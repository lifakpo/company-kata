import {Pipe, PipeTransform} from '@angular/core';
import {orderBy} from 'lodash';

@Pipe({
  name: 'orderby',
  pure: false
})
export class OrderbyPipe implements PipeTransform {

  transform(array: any, sortBy: string, order: any): any[] {
    const sortOrder = order ? order : 'asc';
    return orderBy(array, [sortBy], [sortOrder]);
  }

}
