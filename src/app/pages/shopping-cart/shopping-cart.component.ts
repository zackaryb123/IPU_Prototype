import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/services/auth/auth.service';
import {UserService} from '../../core/services/user/user.service';
import {ProductService} from '../../core/services/product/product.service';
import {Product} from '../../core/models/Product';
import { DocumentSnapshot } from 'angularfire2/firestore';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  private auth: any;
  private cart: any = [];
  public sum: number = 0;
  constructor(
    private _authService: AuthService,
    private _productService: ProductService
  ) { }

  ngOnInit() {
    // Get Logged in Users Cart details
    this.auth = this._authService.getAuth().value;

    console.log(this.auth);
    this._productService.getCartItems(this.auth)
      .subscribe(data => {
        console.log(data);
        data.map((i: Product, index) => {
          this._productService.getProductById(i.ownerId, i.productId)
            .subscribe((product) => {
              const prod = <Product>product.data();
              prod.productId = product.id;
              // prod.productId = data[index].productId;
              console.log(prod);
              this.cart[index] = prod;
              this.sum += prod.price;
            });
        });
        console.log(this.cart);
      });
  }

  removeItem(product: Product) {
    this._productService.removeCartItem(this.auth.uid, product.productId);
  }
}
