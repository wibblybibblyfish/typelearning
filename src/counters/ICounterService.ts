
export abstract class ICounterService {
    abstract getCounter(): IterableIterator<number>;
}
