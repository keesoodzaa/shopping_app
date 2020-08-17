import { Injectable } from '@angular/core';
import { IProductData } from '../models/ProductData';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  lastId:number;

  constructor() { }

  getProducts():IProductData[] {
    return PRODUCT_DATA;
  }

  getProduct(id:number):IProductData {
    return PRODUCT_DATA.find(prd => prd.id === id)
  }

  saveProduct(product:any) {
    this.lastId = Math.max.apply(Math, PRODUCT_DATA.map(function(o) { return o.id; }));
    
    product.id = this.lastId <0 ? 1 : this.lastId+1;
    PRODUCT_DATA.push(product);
  }

  removeProduct(id:number):void {
    var removeIndex = PRODUCT_DATA.map(function(item) { return item.id; }).indexOf(id);
// remove object
    PRODUCT_DATA.splice(removeIndex, 1);
  
  }


}

const PRODUCT_DATA:IProductData[] = [{
  id:1,
  name:"Tomato",
  description:"description"
}]