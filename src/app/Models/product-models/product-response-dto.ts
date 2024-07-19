export interface ProductResponseDto {
    Id: string;
    Name: string;
    Pirce: number;
    QuantityInStock: number;
    IsActive: boolean
    CartTotalAmout?: number;
}