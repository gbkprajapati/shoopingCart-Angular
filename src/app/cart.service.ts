import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CartService {
    
    private cartSubject = new Subject<any>();

    CartState = this.cartSubject.asObservable();

    addProduct(product: any) {
        console.log("Product list" + product);
        //this.Products.push(product);
        this.cartSubject.next(product);

    }


}