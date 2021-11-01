import { ILogger } from "./ILogger";

export class Logger implements ILogger {

    public log(message: string): void {
        console.log(message);
    }

}