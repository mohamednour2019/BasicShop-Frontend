import { Injectable } from "@angular/core";
import { CustomHttp } from "../shared/http-generic.service";
import { environmentValues } from "../../Environment/environment";
import { AddProductCartRequestDto } from "../../Models/cart-models/add-product-to-cart-request-dto.model";
import { ProductResponseDto } from "../../Models/product-models/product-response-dto";

@Injectable({ providedIn: 'root' })
export class CartService {
    constructor(private customHttpClient: CustomHttp) { }

    addProductToCart(requestBody: AddProductCartRequestDto) {
        const url = `${environmentValues.apiBaseURL}${environmentValues.endpoints.cart}`;
        return this.customHttpClient.post<AddProductCartRequestDto, ProductResponseDto>(url, requestBody)
    }

    getCartProducts() {

    }
}
