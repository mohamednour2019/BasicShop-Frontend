export interface environment {
    apiBaseURL: string;
    endpoints: endpoints;
}

export interface endpoints {
    register: string;
    login: string;
    product: string;
    cart: string;
}