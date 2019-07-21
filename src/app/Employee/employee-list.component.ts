import {Component, OnInit, Input} from '@angular/core';
import { IProduct } from './product';
import {EmployeeService} from './employee.service';
import {List} from 'immutable';
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


    products : List<IProduct> = List([]);
    errorMessage : string = '';
    
    
    constructor(private employeeService : EmployeeService) {
        
    }
    ngOnInit(): void {
        console.log("oniinti");
        this.employeeService.getProducts().subscribe(productsParam => {
            this.products = List(productsParam);
            this.filteredProducts = List(this.products);
            console.log(this.products);
            console.log(this.filteredProducts);
        }, 
            error => this.errorMessage = <any> error);
        //this.products = this.employeeService.getProducts();
        
    
       // this.listFilter = 'cart';
    }

    performFilter(filterBy : string) : List<IProduct> {
        filterBy = filterBy.toLocaleLowerCase();
        return List(this.products.filter((product : IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1));
    }

    onRatingClickedEvent  (message : string) : void {
        this.pageTitle = 'Product List : ' + message;
    } 
    
}