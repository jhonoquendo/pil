export interface User {
    id: string;
    name: string;
    last: string;
    [k: string]: any;
}

export interface Result {
    result: User[]
}

export interface HelloResponse {
    success: boolean;
    message: string;
    data?:Result | object;
}