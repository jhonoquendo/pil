import {injectable, inject} from 'inversify';
import {IHelloService} from "../repository/interfaces/IHello.interface";
import {HelloRepository} from "../repository/HelloRepository";

@injectable()
export class HelloService implements IHelloService {
    constructor(
        @inject('HelloRepository') private helloRepository: HelloRepository
    ) {
    }

    async getHello(): Promise<string> {
        return await this.helloRepository.getHello();
    }
}
