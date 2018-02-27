import { ImageCategory } from './ImageCategory';

export class Image {

  constructor(public id: number,
              public category: ImageCategory,
              public caption: string,
              public url: string){}

}
