import { Injectable } from '@angular/core';
import { Image } from '../models/Image';
import { ImageCategory } from '../models/ImageCategory';

@Injectable()
export class ImageService {
  private visibleImages = [];

  getImages(){
    return this.visibleImages = IMAGES.slice(0);
  }

  getImage(id: number){
    return IMAGES.slice(0).find(image => image.id == id); //TODO make ===
  }
}

//TODO convert this into more of a TS thing
//TODO make categories an enum
const IMAGES2 = [
  // {"id":1, "category": "boats", "caption": "View from the boat", "url":"assets/img/boat_01.jpeg"},
  // {"id":2, "category": "boats", "caption": "Sailing the coast", "url":"assets/img/boat_02.jpeg"},
  // {"id":3, "category": "boats", "caption": "The water was nice", "url":"assets/img/boat_03.jpeg"},
  // {"id":4, "category": "boats", "caption": "Cool water cavern", "url":"assets/img/boat_04.jpeg"},
  // {"id":5, "category": "boats", "caption": "Sunset at the docks", "url":"assets/img/boat_05.jpeg"},
  {"id":6, "category": "camping", "caption": "Camping Trip '17'", "url":"assets/img/camping_01.jpeg"},
  {"id":7, "category": "camping", "caption": "Kim and Jessie", "url":"assets/img/camping_02.jpeg"},
  {"id":8, "category": "camping", "caption": "View from the top", "url":"assets/img/camping_03.jpeg"},
  {"id":9, "category": "camping", "caption": "On the trail", "url":"assets/img/camping_04.jpg"},
  {"id":10, "category": "camping", "caption": "Our camping spot", "url":"assets/img/camping_05.jpeg"},
  {"id":11, "category": "camping", "caption": "RV Life", "url":"assets/img/camping_06.jpg"},
  {"id":12, "category": "camping", "caption": "Hiking trip 2017", "url":"assets/img/camping_07.jpeg"},
  {"id":13, "category": "library", "caption": "Big library", "url":"assets/img/library_01.jpeg"},
  {"id":14, "category": "library", "caption": "Stacks", "url":"assets/img/library_02.jpeg"},
  {"id":15, "category": "library", "caption": "Saturday afternoon", "url":"assets/img/library_03.jpeg"},
  {"id":16, "category": "library", "caption": "Local library", "url":"assets/img/library_04.jpeg"},
  {"id":17, "category": "library", "caption": "Nice library", "url":"assets/img/library_05.jpeg"}
];

const IMAGES: Image[] = [
  new Image(1, ImageCategory.BOATS, 'View from the boat', 'assets/img/boat_01.jpeg'),
  new Image(2, ImageCategory.BOATS, 'Sailing the coast', 'assets/img/boat_02.jpeg'),
  new Image(3, ImageCategory.BOATS, 'The water was nice', 'assets/img/boat_03.jpeg'),
  new Image(4, ImageCategory.BOATS, 'Cool water cavern', 'assets/img/boat_04.jpeg'),
  new Image(5, ImageCategory.BOATS, 'Sunset at the docks', 'assets/img/boat_05.jpeg')
];
