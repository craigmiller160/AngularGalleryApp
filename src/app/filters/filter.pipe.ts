import { Pipe, PipeTransform } from '@angular/core';
import { ImageCategory } from '../models/ImageCategory';

@Pipe({name: 'imageFilter'})
export class ImageFilterPipe implements PipeTransform {

  transform(items: any[], ...criteria): any[] {
    if(criteria[0] == ImageCategory.ALL){
      return items;
    }
    else{
      return items.filter(item => item.category == criteria);
    }
  }
}
