import { IProduct } from './product';
import { Input, Component, Output, EventEmitter, ChangeDetectionStrategy, OnInit } from '@angular/core';

import {List} from 'immutable';
import {EmployeeService} from './employee.service';

const fibonacci = (num: number): number => {
    console.log("fibonacci is calleds");
    if (num === 1 || num === 2) {
      return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
  };

@Component({
    selector : 'product-list-nested',
    templateUrl : './product-list-nested.component.html',
    styleUrls : ['./product-list-nested.component.css'],
    
})


export class ProductListNestedComponent implements OnInit{

  @Input()  filteredProducts : List<IProduct>;
  @Input() products : List<IProduct> = List([]);   
  @Output() ratingClickedEvent : EventEmitter<string> = new EventEmitter<string>();
   rowData = [];
  pageTitle : string = '';  
  showImage : boolean = true;
  imageWidth : number = 50;
    imageMargin :  number = 2;
    errorMessage : string = '';
    

    columnDefs = [
      {headerName: 'Image', cellRenderer : 'imageCellRenderer'},
      {headerName: 'Product', field: 'productName' },
      {headerName: 'Product Code', field: 'productCode'},
      {headerName: 'Release Date', field: 'releaseDate'},
      {headerName: 'Price', field: 'price'},
      {headerName: 'Ranking', field: 'ranking', cellRenderer : 'rankingCellRenderer'},
  ];
  gridOptions : {};
  constructor(private employeeService : EmployeeService) {
        
  }

  ngOnInit(): void {
    console.log("oniinti");
    let myRowArray = [];
    this.employeeService.getProducts().subscribe(productsParam => {
        this.products = List(productsParam);
        this.filteredProducts = List(this.products);
        let me = this;
        this.products.forEach(function(productParam) {
                let myProduct = {
                    imageURL : productParam.imageURL,
                    productName : productParam.productName,
                    productCode : productParam.productCode,
                    releaseDate : productParam.releaseDate,
                    price : productParam.price,
                    ranking : 3
                };

                myRowArray.push(myProduct);
        });
        this.rowData = Array.from(myRowArray) ;
        
        //var gridDiv = document.querySelector('#myGrid');
        //new agGrid.Grid(gridDiv, gridOptions);
        //gridOptions.api.setRowData(this.rowData);
        

    }, 
        error => this.errorMessage = <any> error);
    //this.products = this.employeeService.getProducts();
    this.gridOptions = {
      columnDefs: this.columnDefs,
      rowData: null,
      components:{
        imageCellRenderer: this.imageCellRenderer,
        rankingCellRenderer : this.rankingCellRenderer
          
      }
  };

  }
  rankingCellRenderer(param) {
    let num = fibonacci(1);
    let returnStr = "" + num;
    return returnStr;
  }
  imageCellRenderer (params) {
    return "<img height='42' width='42' src = '../../../assets/images/image_1.png' >";
}
  onRatingClicked(message : string) : void {
    console.log("on rating clicked in employee");
    
    this.ratingClickedEvent.emit(message);
 }

 toggleImage() : void {
    this.showImage = !this.showImage;
}


  calculate(num: number) {
    console.log("calculate method called");
    return fibonacci(num);
  }

}