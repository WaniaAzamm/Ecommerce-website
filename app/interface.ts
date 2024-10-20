import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface productinterface {
    _id : string;
    imageUrl : string;
    price:number;
    slug :string;
    categoryName :string;
    name:string;

}

export interface fullProduct {
    [x: string]: any;
    _id : string;
    images : any;
    price:number;
    slug :string;
    categoryName :string;
    name:string;
    description :string
    price_id :string
}