import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    MovieListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
     
      { path: 'books', component: BookListComponent },
      { path: 'movies', component: MovieListComponent },
      { path: '',   redirectTo: '/books', pathMatch: 'full' }
    ])
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
