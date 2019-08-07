import {Pipe, PipeTransform} from '@angular/core';
import {List} from 'immutable';
import { IProduct } from '../Employee/product';
@Pipe({
    name : 'convertToImmutable'
})
export class ConvertToImmutableList implements PipeTransform{
    transform(value : IProduct[]) : List<IProduct> {
        return List(value);
    }
 
}