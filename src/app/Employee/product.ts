import {IDeeplyNested} from './DeeplyNested';
export interface IProduct {
    Id : number;
    productId : number;
    productName : string;
    productCode : string;
    releaseDate : string;
    price : number;
    description : string;
    starRating : number;
    imageURL : string;
    DeeplyNested : IDeeplyNested;
    DeeplyNestedAgain : IDeeplyNested;
}