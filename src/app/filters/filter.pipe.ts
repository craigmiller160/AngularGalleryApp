import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'imageFilter'})
export class ImageFilterPipe implements PipeTransform {

  transform(items: any[], ...criteria): any[] {
    if(criteria[0] == 'all'){
      return items;
    }
    else{
      return items.filter(item => item.category == criteria);
    }
  }
}
