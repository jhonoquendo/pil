import {injectable} from 'inversify';

@injectable()
export class HelloRepository implements HelloRepository {

    constructor() {
    }

    async getHello(): Promise<string> {

        return 'Hello Repository 2';
    }
}