export interface IResponse {
    exit? : number,
    statusCode: number,
    message: string,
    exceptionDetails?: string
}