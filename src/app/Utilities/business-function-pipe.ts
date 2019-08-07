import {Pipe, PipeTransform} from '@angular/core';
const fibonacci = (num: number): number => {
    console.log("calculating fibonacci no at nth position =>" + num);
    if (num === 1 || num === 2) {
      return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
  };
@Pipe({
    name : 'businessFunctionPipe',
    pure : true
})
export class BusinessFunctionPipe implements PipeTransform{
    transform(value : number) : number {
      console.log("BusinessFunctionPipe  called for nth position calculation->" +value);
        return fibonacci(value);
    }
 
}