
export abstract class ICounterService {
    abstract start(): number;
    abstract getNext(current: number): number;
    abstract hasNext(current: number): boolean;
}
