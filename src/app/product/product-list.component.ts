import { Component, OnInit } from '@angular/core';
import { IProductData } from '../models/ProductData';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:IProductData[];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
   this.products = this.productService.getProducts();
  }
  removeItem(productID){
    console.log(productID);
    this.productService.removeProduct(productID);
  }

}
