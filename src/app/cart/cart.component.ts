import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products = [];
  totalPrice = 0;
  totalItemPrice = 0;
  itemPrice;
  taxPrice = 0.09;
  private subscription: Subscription;
  constructor(private cartservice: CartService) {

  }

  ngOnInit() {

    this.subscription = this.cartservice.CartState.subscribe((state) => {
      this.products.push(state);
        this.totalItemPrice = this.totalItemPrice + state.price;
        this.totalPrice = this.totalItemPrice + (this.totalItemPrice * this.taxPrice);

    });
  }

  removeItem(product){
    console.log("Product is " + product);
    this.products.splice(product,1);
    this.totalItemPrice = this.totalItemPrice - product.price;
    this.totalPrice = this.totalItemPrice + (this.totalItemPrice * this.taxPrice);
  }

}
