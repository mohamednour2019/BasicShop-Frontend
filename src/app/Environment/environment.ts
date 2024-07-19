import { environment } from "../Models/configruations.model";

export const environmentValues: environment = {
    apiBaseURL: 'https://localhost:7232/',
    endpoints: {
        register: "api/v1/User/register",
        login: "api/v1/User/login",
        product: 'api/v1/Product',
        cart: "api/v1/Cart"
    }
}