import { Component, OnInit } from '@angular/core';
import { IProductData } from '../models/ProductData';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product:IProductData;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

  addNew(formValues){
    console.log(formValues.name);
    let shopingItem:IProductData = {
                            id:0,
                            name:formValues.name,
                            description:""
                          }
    this.productService.saveProduct(shopingItem);
  }

}
