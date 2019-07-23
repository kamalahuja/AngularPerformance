import {Pipe, PipeTransform} from '@angular/core';
const fibonacci = (num: number): number => {
    console.log("fibonacci called n times->" +num);
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
        return fibonacci(value);
    }
 
}