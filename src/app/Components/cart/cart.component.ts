import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  totalPrice = 500;

  cartItems: { name: string, price: number, quantity: number }[] = [
    { name: 'tomato', price: 20, quantity: 3 },
    { name: 'tomato', price: 20, quantity: 3 },
    { name: 'tomato', price: 20, quantity: 3 },
    { name: 'tomato', price: 20, quantity: 3 },
    { name: 'tomato', price: 20, quantity: 3 },
    { name: 'tomato', price: 20, quantity: 3 },
    { name: 'tomato', price: 20, quantity: 3 }

  ]
}
