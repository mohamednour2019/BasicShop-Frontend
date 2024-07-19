import { Injectable } from "@angular/core";
import { CustomHttp } from "../shared/http-generic.service";
import { environmentValues } from "../../Environment/environment";
import { ProductResponseDto } from "../../Models/product-models/product-response-dto";
import { AddProductRequestDto } from "../../Models/product-models/add-product-request-dto.model";
import { AuthService } from "../user-services/auth.service";
import { UpdateProductRequestDto } from "../../Models/product-models/update-product-request-dto.model";

@Injectable({ providedIn: 'root' })
export class ProductService {
    constructor(private customHttpClient: CustomHttp, private authService: AuthService) {
    }

    getAllProducts() {
        const url = `${environmentValues.apiBaseURL}${environmentValues.endpoints.product}`;
        return this.customHttpClient.get<ProductResponseDto[]>(url);
    }

    getActiveProducts() {
        const url = `${environmentValues.apiBaseURL}${environmentValues.endpoints.product}/active/${this.authService.getCartId()}`
        return this.customHttpClient.get<ProductResponseDto[]>(url);
    }


    addProduct(requestDto: AddProductRequestDto) {
        const url = `${environmentValues.apiBaseURL}${environmentValues.endpoints.product}`;
        return this.customHttpClient.post<AddProductRequestDto, ProductResponseDto>(url, requestDto);
    }

    toggleProductStatus(productId) {
        const url = `${environmentValues.apiBaseURL}${environmentValues.endpoints.product}/${productId}`;
        this.customHttpClient.patch<null, ProductResponseDto>(url, null).subscribe({
            next: () => { }
        })
    }


    updateProduct(requestBody: UpdateProductRequestDto) {
        const url = `${environmentValues.apiBaseURL}${environmentValues.endpoints.product}/update`;
        return this.customHttpClient.patch<UpdateProductRequestDto, ProductResponseDto>(url, requestBody)
            .subscribe({ next: response => { } })
    }



}