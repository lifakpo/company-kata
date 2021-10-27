import {Pipe, PipeTransform} from '@angular/core';
import {uniqBy} from "lodash";

@Pipe({
  name: 'removeduplicates',
  pure: false
})
export class RemovePipe implements PipeTransform {

  transform(value: any): any {
    if (value) {
      return uniqBy(value, 'Company Name');
    }
    return value;
  }
}
