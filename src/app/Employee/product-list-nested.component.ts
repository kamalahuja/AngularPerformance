import { IProduct } from './product';
import { Input, Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector : 'product-list-nested',
    templateUrl : './product-list-nested.component.html',
    styleUrls : ['./product-list-nested.component.css']
})
export class ProductListNestedComponent{
  @Input()  filteredProducts : IProduct[];
  @Input() products : IProduct[] = [];   
  @Output() ratingClickedEvent : EventEmitter<string> = new EventEmitter<string>();
  pageTitle : string = '';  
  showImage : boolean = false;
  imageWidth : number = 50;
    imageMargin :  number = 2;

  onRatingClicked(message : string) : void {
    console.log("on rating clicked in employee");
    
    this.ratingClickedEvent.emit(message);
 }

 toggleImage() : void {
    this.showImage = !this.showImage;
}

 


}