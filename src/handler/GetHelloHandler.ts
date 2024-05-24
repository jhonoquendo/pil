import type {
    Context,
    APIGatewayProxyEventV2,
    Handler,
} from "aws-lambda";
import "reflect-metadata";
import { IHelloService } from "../repository/interfaces/IHello.interface";
import {HelloService} from "../service/HelloService";
import {HelloRepository} from "../repository/HelloRepository";
import {HelloResponse} from "../shared/Responses";
import {APIGatewayProxyStructuredResultV2} from "aws-lambda";

export const handler: Handler = async (
    _event: APIGatewayProxyEventV2,
    _context: Context
): Promise<APIGatewayProxyStructuredResultV2> => {

    const repository = new HelloRepository();
    const service: IHelloService = new HelloService(repository);

    try {
        const hello = await service.getHello();
        const response: HelloResponse = {
            success: true,
            message: "Respondiendote",
            data: {
                result: hello
            }
        };

        return {
            statusCode: 200,
            body: JSON.stringify(response)
        };
    } catch (error) {
        const errorResponse: HelloResponse = {
            success: false,
            message: "Error desconocido",
        };
        return {
            statusCode: 500,
            body: JSON.stringify(errorResponse)
        };
    }
}