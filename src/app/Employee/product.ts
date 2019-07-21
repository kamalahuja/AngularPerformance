import {IDeeplyNested} from './DeeplyNested';

export interface IProduct {
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