import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../../Services/product-services/product.service';
import { ProductResponseDto } from '../../../Models/product-models/product-response-dto';
import { AddProductRequestDto } from '../../../Models/product-models/add-product-request-dto.model';
import { UpdateProductRequestDto } from '../../../Models/product-models/update-product-request-dto.model';
import { devOnlyGuardedExpression } from '@angular/compiler';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {

  @ViewChild('name') newProductName: HTMLInputElement;
  @ViewChild('quantity') newProductQuantity: HTMLInputElement;
  @ViewChild('price') newProductPrice: HTMLInputElement;

  products: ProductResponseDto[]

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: response => {
        this.products = response.Data
      }
    })
  }
  addProduct(name: HTMLInputElement, quantity: HTMLInputElement, price: HTMLInputElement) {
    let Name = name.value
    let Price = Number(price.value);
    let Quantity = Number(quantity.value)
    if (quantity.value && price.value && name.value) {
      let requestDto: AddProductRequestDto = {
        Name: Name,
        Price: Price,
        QuantityInStock: Quantity
      }
      this.productService.addProduct(requestDto).subscribe({
        next: response => {
          this.products.unshift(response.Data);
        }
      })
    }
  }



  toggleStatus(productId) {
    this.productService.toggleProductStatus(productId);
  }


  saveProduct(price: number, id: string, quantity: number) {
    let requestDto: UpdateProductRequestDto = {
      Quantity: quantity,
      Price: Number(price),
      ProductId: id
    }
    debugger;
    this.productService.updateProduct(requestDto);

  }



}
