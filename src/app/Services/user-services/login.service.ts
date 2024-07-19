import { Injectable } from "@angular/core";
import { CustomHttp } from "../shared/http-generic.service";
import { LoginRequestDto } from "../../Models/user-models/login-request-dto.model";
import { environmentValues } from "../../Environment/environment";
import { UserResponseDto } from "../../Models/user-models/user-response-dto.model";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Injectable({ providedIn: "root" })
export class LoginService {
    constructor(private customHttpClient: CustomHttp, private authService: AuthService, private router: Router) { }

    login(loginRequestDto: LoginRequestDto) {
        const url = `${environmentValues.apiBaseURL}${environmentValues.endpoints.login}`;
        this.customHttpClient.post<LoginRequestDto, UserResponseDto>(url, loginRequestDto)
            .subscribe({
                next: (response) => {
                    this.authService.setUserData(response.Data);
                    this.router.navigate(["/home"]);
                }
            })
    }
}