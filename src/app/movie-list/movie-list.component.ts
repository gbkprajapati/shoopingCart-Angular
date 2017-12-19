import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private cartservice: CartService) { }

  ngOnInit() {
  }

  movieList = [
    { "title": "Mom", "price": 5 },
    { "title": "Troy", "price": 2 },
    { "title": "Red", "price": 10 },
    { "title": "Kill Dill", "price": 17 },
    { "title": "Dil", "price": 8 }
  ];

  OrderBook(book) {
    //console.log(book);
    this.cartservice.addProduct(book);

  }

}
