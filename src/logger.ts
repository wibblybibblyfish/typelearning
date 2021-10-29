export abstract class ILogger {
    abstract log(message: string): void;
}

export class Logger implements ILogger {

    public log(message: string): void {
        console.log(message);
    }

}