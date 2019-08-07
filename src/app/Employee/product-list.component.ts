import {Component, OnInit, Input} from '@angular/core';
import { IProduct } from './product';
import {ProductService} from './product.service';
import {List} from 'immutable';
import { Observable } from "rxjs";
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

    filteredProducts : List<IProduct>;
    productObservable : Observable< IProduct[]>;

    products : List<IProduct> = List([]);
    errorMessage : string = '';
    
    
    constructor(private productService : ProductService) {
        
    }
    ngOnInit(): void {
        console.log("oniinti");
        this.productObservable =  this.productService.getProducts();
     /*   this.productService.getProducts().subscribe(productsParam => {
            this.products = List(productsParam);
            this.filteredProducts = List(this.products);
            console.log(this.products);
            console.log(this.filteredProducts);
        }, 
            error => this.errorMessage = <any> error);*/
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
    
}