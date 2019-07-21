import { IProduct } from './product';
import { Input, Component, Output, EventEmitter } from '@angular/core';
const fibonacci = (num: number): number => {
    console.log("fibonacci called n times");
    if (num === 1 || num === 2) {
      return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
  };

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
  showImage : boolean = true;
  imageWidth : number = 50;
    imageMargin :  number = 2;
    
    
  onRatingClicked(message : string) : void {
    console.log("on rating clicked in employee");
    
    this.ratingClickedEvent.emit(message);
 }

 toggleImage() : void {
    this.showImage = !this.showImage;
}


  calculate(num: number) {
    return fibonacci(num);
  }

}