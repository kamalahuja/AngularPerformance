import {  Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";

@Injectable(
    {
        providedIn : "root"
    }
)
export class EmployeeService {
private productURL = 'http://localhost:3000/products';
private productIdSequnce : number = 1;
constructor(private http : HttpClient) {

}
    getProducts() : Observable< IProduct[]> {
        return this.http.get<IProduct[]>(this.productURL).pipe(tap(data => console.log("All : " + JSON.stringify(data)) ,
                catchError(this.handleError)));
    }

    private handleError (err : HttpErrorResponse) {
        let errorMessage = '';
        if(err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `server returned error code : ${err.status}, error message : ${err.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
    getProductSequence() : number {
        this.productIdSequnce = this.productIdSequnce + 1;
        return this.productIdSequnce;
    }

}