
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, tap, throwError } from "rxjs";
import { ResponseModel } from "../../Models/response.model";
import { spinnerService } from "./spinner.service";
import { toast } from "./toast.service";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";


@Injectable({ providedIn: "root" })
export class CustomHttp {

    constructor(private httpClient: HttpClient, private router: Router, private spinnerService: spinnerService, private toast: toast) { }

    post<TRequestDto, TResponseDto>(url: string, body?: TRequestDto | null): Observable<ResponseModel<TResponseDto>> | null {
        this.spinnerService.showSpinner();
        return this.httpClient.post<ResponseModel<TResponseDto>>(url, body)
            .pipe(catchError(response => this.errorHandler(response)), tap((response) => {
                this.spinnerService.hideSpinner();
                if (response.Message) {
                    this.toast.showToast({ type: 'success', message: response.Message })
                }
            }));
    }


    get<TResponseDto>(url: string): Observable<ResponseModel<TResponseDto>> {
        return this.httpClient.get<ResponseModel<TResponseDto>>(url)
            .pipe(catchError(response => this.errorHandler(response)), tap((response) => {
                this.spinnerService.hideSpinner();
                if (response.Message) {
                    this.toast.showToast({ type: 'success', message: response.Message })
                }
            }));
    }

    delete<TRequestDto, TResponseDto>(url: string, body?: TRequestDto | null): Observable<ResponseModel<TResponseDto>> {
        return this.httpClient.delete<ResponseModel<TResponseDto>>(url, { body: body })
            .pipe(catchError(response => this.errorHandler(response)), tap((response) => {
                this.spinnerService.hideSpinner();
                if (response.Message) {
                    this.toast.showToast({ type: 'success', message: response.Message })
                }
            }));
    }


    patch<TRequestDto, TResponseDto>(url: string, body?: TRequestDto | null): Observable<ResponseModel<TResponseDto>> {
        return this.httpClient.patch<ResponseModel<TResponseDto>>(url, body)
            .pipe(catchError(response => this.errorHandler(response)), tap((response) => {
                this.spinnerService.hideSpinner();
                if (response.Message) {
                    this.toast.showToast({ type: 'success', message: response.Message })
                }
            }));
    }


    private errorHandler(response: HttpErrorResponse) {
        let errorMessage = 'you are offline!'
        errorMessage = response.error?.Message?.toString();
        switch (response.status) {
            // case 401:{
            //     this.refreshTokenService.RefreshToken()
            //     break;
            // }
            // case 0:{
            //     this.authService.clearLocalStorage();
            //     this.router.navigate(['/server','error'])
            //     break;
            // }
            default: {
                this.toast.showToast({ type: 'error', message: errorMessage })
                break;
            }
        }
        this.spinnerService.hideSpinner();
        return throwError(() => new Error(errorMessage));
    }
}