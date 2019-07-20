import {Component, OnInit, Input} from '@angular/core';
import { IProduct } from './product';
import {EmployeeService} from './employee.service';

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

    filteredProducts : IProduct[];


    products : IProduct[] = [];
    errorMessage : string = '';
    
    
    constructor(private employeeService : EmployeeService) {
        
    }
    ngOnInit(): void {
        console.log("oniinti");
        this.employeeService.getProducts().subscribe(productsParam => {
            this.products = productsParam
            this.filteredProducts = this.products;
        }, 
            error => this.errorMessage = <any> error);
        //this.products = this.employeeService.getProducts();
        
    
       // this.listFilter = 'cart';
    }

    performFilter(filterBy : string) : IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product : IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    onRatingClickedEvent  (message : string) : void {
        this.pageTitle = 'Product List : ' + message;
    } 
    
}