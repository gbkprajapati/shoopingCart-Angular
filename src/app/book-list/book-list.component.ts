import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private cartservice: CartService) { }

  ngOnInit() {
  }

  booklist = [
    { "title": "C++", "price": 11 },
    { "title": "Python", "price": 11 },
    { "title": "java", "price": 11 },
    { "title": "Javascript", "price": 11 },
    { "title": "Es6", "price": 11 }
  ];

  OrderBook(book) {
    //console.log(book);
    this.cartservice.addProduct(book);

  }

}
