import {Component, OnInit, Input} from '@angular/core';
import { IProduct } from './product';
import {EmployeeService} from './employee.service';
import {List} from 'immutable';

const fibonacciTest = (num: number): number => {
    console.log("fibonacci called n times");
    if (num === 1 || num === 2) {
      return 1;
    }
    return fibonacciTest(num - 1) + fibonacciTest(num - 2);
  };

@Component ({
    selector: 'pm-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls : ['./employee-list.component.css']
})

export class  EmployeeListComponent implements OnInit{
    pageTitle : string = 'Product List';

    @Input() randomProperty : boolean = false;
    _listFilter : string;
    get listFilter() : string {
        return this._listFilter;
    }
    set listFilter(value : string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts : List<IProduct>;

    rowData  = [];
    products : List<IProduct> = List([]);
    errorMessage : string = '';
    
    
    constructor(private employeeService : EmployeeService) {
        
    }
    ngOnInit(): void {
        console.log("oniinti");
        let myRowArray = [];
       
       

     
    }

    performFilter(filterBy : string) : List<IProduct> {
        filterBy = filterBy.toLocaleLowerCase();
        return List(this.products.filter((product : IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1));
    }

    onRatingClickedEvent  (message : string) : void {
        this.pageTitle = 'Product List : ' + message;
    } 

    addproduct() : void {
        let product : IProduct = {
            productId : 8,
            productName : "Hero Honda Bike",
            productCode : "HHND",
            releaseDate : "23/2/2019",
            price : 23.2,
            description : "Hero Honda Bike",
            starRating : 4.3,
            imageURL : "../../../assets/images/image_1.png",
            DeeplyNested : {
                MoreDeeplyNested : {
                    TEsdt : "1",
                    TEwst : "3",
                    Test1 : "5",
                    Test2 : "3"
                }
            },
            DeeplyNestedAgain : {MoreDeeplyNested : {
                TEsdt : "1",
                TEwst : "3",
                Test1 : "5",
                Test2 : "3"
            }}
        };
       this.products = this.products.push(product);

    }
    calculate(num: number) {
        return fibonacciTest(num);
      }
}