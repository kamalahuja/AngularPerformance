import {Component, OnInit, Input} from '@angular/core';
import { IProduct } from './product';
import {ProductService} from './product.service';

@Component ({
    selector: 'pm-product-list',
    templateUrl: './product-list.component.html',
    styleUrls : ['./product-list.component.css']
})

export class  ProductListComponent implements OnInit{
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
    
    
    constructor(private productService : ProductService) {
        
    }
    ngOnInit(): void {
        console.log("oniinti");
        this.productService.getProducts().subscribe(productsParam => {
            this.products = productsParam
            this.filteredProducts = this.products;
        }, 
            error => this.errorMessage = <any> error);
    }

    performFilter(filterBy : string) : IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product : IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    onRatingClickedEvent  (message : string) : void {
        this.pageTitle = 'Product List : ' + message;
    } 
    
}