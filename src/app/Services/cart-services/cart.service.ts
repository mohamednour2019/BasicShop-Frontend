import { Injectable } from "@angular/core";
import { CustomHttp } from "../shared/http-generic.service";
import { environmentValues } from "../../Environment/environment";
import { AddProductCartRequestDto } from "../../Models/cart-models/add-product-to-cart-request-dto.model";
import { ProductResponseDto } from "../../Models/product-models/product-response-dto";
import { AuthService } from "../user-services/auth.service";
import { ProductCartResponseDto } from "../../Models/cart-models/cart-product-response-dto.model";
import { Subject } from "rxjs";
import { DeleteProductCartResponseDto } from "../../Models/cart-models/delelte-product-from-cart-request-dto.model";
import { ChangeProductCartQuantityRequestDto } from "../../Models/cart-models/change-quantity-request-dto.model";

@Injectable({ providedIn: 'root' })
export class CartService {
    constructor(private customHttpClient: CustomHttp, private authService: AuthService) { }

    newProductCart: Subject<ProductCartResponseDto> = new Subject();
    removedProductCart: Subject<ProductResponseDto> = new Subject();
    addProductToCart(requestBody: AddProductCartRequestDto) {
        const url = `${environmentValues.apiBaseURL}${environmentValues.endpoints.cart}`;
        return this.customHttpClient.post<AddProductCartRequestDto, ProductCartResponseDto>(url, requestBody)
    }

    getCartProducts() {
        const url = `${environmentValues.apiBaseURL}${environmentValues.endpoints.cart}/${this.authService.getCartId()}`;
        return this.customHttpClient.get<ProductCartResponseDto[]>(url);
    }

    deleteProductFromCart(requestBody: DeleteProductCartResponseDto) {
        const url = `${environmentValues.apiBaseURL}${environmentValues.endpoints.cart}`;
        return this.customHttpClient.delete<DeleteProductCartResponseDto, ProductResponseDto>(url, requestBody)
    }

    changeQuantity(requestBody: ChangeProductCartQuantityRequestDto) {
        const url = `${environmentValues.apiBaseURL}${environmentValues.endpoints.cart}/quantity`;
        return this.customHttpClient.post<ChangeProductCartQuantityRequestDto, ProductCartResponseDto>(url, requestBody);
    }
}
