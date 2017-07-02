import { Component, OnInit, Input } from '@angular/core';
//import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
 //@Input()
  //product: Product;
  constructor() {
    // this.product = new Product(
    //   'NICEHAT',
    //   'A Nice Black Hat',
    //   '/assets/images/products/black-hat.jpg',
    //   ['Men', 'Accessories', 'Hats'],
    //   29.99);
  }
  ngOnInit() {
  }

}
