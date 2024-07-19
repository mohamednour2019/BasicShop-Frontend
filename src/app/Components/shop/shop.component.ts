import { Component, OnInit } from '@angular/core';
import { ProductResponseDto } from '../../Models/product-models/product-response-dto';
import { ProductService } from '../../Services/product-services/product.service';
import { CartService } from '../../Services/cart-services/cart.service';
import { AddProductCartRequestDto } from '../../Models/cart-models/add-product-to-cart-request-dto.model';
import { AuthService } from '../../Services/user-services/auth.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit {
  products: ProductResponseDto[];

  constructor(private productService: ProductService, private cartService: CartService, private authService: AuthService) { }

  ngOnInit(): void {

    this.cartService.removedProductCart.subscribe({
      next: response => {
        this.products.unshift(response)
      }
    })


    this.productService.getActiveProducts().subscribe({
      next: response => {
        this.products = response.Data
      }
    })
  }


  addToCart(productId) {
    let requestDto: AddProductCartRequestDto = {
      CartId: this.authService.getCartId(),
      ProductId: productId
    }
    this.cartService.addProductToCart(requestDto).subscribe({
      next: response => {
        this.handleProductList(response.Data.ProductId)
        this.cartService.newProductCart.next(response.Data);
      }
    })
  }



  handleProductList(productId) {
    let index = this.products.findIndex(x => x.Id == productId);
    this.products.splice(index, 1);
  }


}
