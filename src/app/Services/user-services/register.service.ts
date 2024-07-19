import { Injectable } from "@angular/core";
import { RegisterRequestDto } from "../../Models/user-models/register-request-dto.model";
import { environmentValues } from "../../Environment/environment";
import { CustomHttp } from "../shared/http-generic.service";
import { UserResponseDto } from "../../Models/user-models/user-response-dto.model";
import { Router } from "@angular/router";

@Injectable({ providedIn: "root" })
export class RegisterService {
    constructor(private customHttpClient: CustomHttp, private router: Router) { }

    Register(registerDto: RegisterRequestDto) {
        const url = `${environmentValues.apiBaseURL}${environmentValues.endpoints.register}`
        this.customHttpClient.post<RegisterRequestDto, UserResponseDto>(url, registerDto).subscribe({
            next: response => {
                this.router.navigate(['/home']);
            }
        })

    }
}