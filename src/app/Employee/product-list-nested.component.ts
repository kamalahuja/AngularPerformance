import { IProduct } from './product';
import { Input, Component, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from './employee.service';
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
    
    constructor(private employeeService : EmployeeService) {
        
    }
  onRatingClicked(message : string) : void {
    console.log("on rating clicked in employee");
    
    this.ratingClickedEvent.emit(message);
 }

 toggleImage() : void {
    //this.showImage = !this.showImage;
    console.log(this.products);
    let newProduct : IProduct = {
      Id : this.employeeService.getProductSequence(),
      imageURL : "../../../assets/images/image_1.png",
      description : "jhsdfjvbkjfdn",
      price : 2332,
      productCode : "GHN",
      starRating : 4,
      productName : "hsdbjvbfddfs",
      productId : 5,
      releaseDate : '09/09/2019',
      DeeplyNested : { 
          MoreDeeplyNested : {
            TEsdt : 'dfd',
            TEwst : 'dfvdddddd',
            Test1 : 'rfererfre',
            Test2 : 'dfvdd'
          }
      },
      DeeplyNestedAgain : { 
        MoreDeeplyNested : {
          TEsdt : 'dfd',
          TEwst : 'dfvdddddd',
          Test1 : 'rfererfre',
          Test2 : 'dfvdd'
        }
    }
    };
    
    this.products.push(newProduct);
    this.filteredProducts.push(newProduct);

}

addProduct() : void {
  
}
  calculate(num: number) {
    return fibonacci(num);
  }
  trackByItems(index: number, item: IProduct): number
   {
      console.log("inside track by" + item.Id) ;
    return item.Id; }

}