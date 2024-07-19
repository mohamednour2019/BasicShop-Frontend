import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart-services/cart.service';
import { ProductCartResponseDto } from '../../Models/cart-models/cart-product-response-dto.model';
import { AuthService } from '../../Services/user-services/auth.service';
import { DeleteProductCartResponseDto } from '../../Models/cart-models/delelte-product-from-cart-request-dto.model';
import { ChangeProductCartQuantityRequestDto } from '../../Models/cart-models/change-quantity-request-dto.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  totalPrice: number;
  cartItems: ProductCartResponseDto[];
  constructor(private cartService: CartService, private authService: AuthService) { }
  ngOnInit(): void {

    this.cartService.newProductCart.subscribe({
      next: response => {
        this.cartItems.unshift(response)
        this.totalPrice = response.CartTotalPrice
      }
    })


    this.cartService.getCartProducts().subscribe(
      {
        next: response => {
          this.cartItems = response.Data
          this.totalPrice = response.Data[0].CartTotalPrice;
        }
      })
  }


  removeItem(productId) {

    let requestDto: DeleteProductCartResponseDto = {
      ProductId: productId
      , CartId: this.authService.getCartId()
    }

    this.cartService.deleteProductFromCart(requestDto).subscribe({
      next: response => {
        this.totalPrice = response.Data.CartTotalAmout
        this.handleProductList(response.Data.Id);
        this.cartService.removedProductCart.next(response.Data);
      }
    })
  }

  handleProductList(productId) {
    let index = this.cartItems.findIndex(x => x.ProductId == productId);
    this.cartItems.splice(index, 1);
  }

  changeQuantity(quantity: HTMLInputElement, productId: string) {
    let newQuantity = Number(quantity.value);
    let requestDto: ChangeProductCartQuantityRequestDto = {
      CartId: this.authService.getCartId(),
      ProductId: productId,
      Quantity: newQuantity
    }
    this.cartService.changeQuantity(requestDto).subscribe({
      next: response => {
        this.totalPrice = response.Data.CartTotalPrice
      }
    })
  }

}
