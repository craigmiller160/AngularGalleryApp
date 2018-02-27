import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { ImageCategory } from '../../models/ImageCategory';
import { Image } from '../../models/Image';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges {

  title = 'Recent Photos';
  @Input() filterBy?: ImageCategory = ImageCategory.ALL;
  visibleImages: Image[];
  //TODO figure out a better way to do this
  categories: ImageCategory[] = [
    ImageCategory.ALL,
    ImageCategory.BOATS,
    ImageCategory.CAMPING,
    ImageCategory.LIBRARY
  ];

  constructor(private imageService: ImageService) {
    this.visibleImages = imageService.getImages();
  }

  ngOnInit(): void {

  }


  ngOnChanges(changes: SimpleChanges): void {
    this.visibleImages = this.imageService.getImages();
  }
}
