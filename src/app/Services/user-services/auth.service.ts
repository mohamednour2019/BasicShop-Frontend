import { Expansion } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { UserResponseDto } from "../../Models/user-models/user-response-dto.model";

@Injectable({ providedIn: 'root' })
export class AuthService {

    setUserData(UserData: UserResponseDto) {
        let userData = JSON.stringify(UserData);
        localStorage.setItem('userData', userData)
    }

    getUserId() {
        let userId = JSON.parse(localStorage.getItem("userData")).UserId;
        return userId
    }

    getCartId() {
        let cartId = JSON.parse(localStorage.getItem("userData")).CartId;
        return cartId
    }

    getUserRole() {
        let role = JSON.parse(localStorage.getItem("userData")).Role;
        return role
    }

    getUserData() {
        return JSON.parse(localStorage.getItem("userData"));
    }

    clearLocalStorage() {
        localStorage.removeItem('userData');
    }
}