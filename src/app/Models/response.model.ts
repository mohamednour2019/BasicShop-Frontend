export interface ResponseModel<T> {
    Success: boolean
    Message?: string
    Data: T
}