import { InjectValue } from "typescript-ioc";
import { CounterConfig} from "./counterConfig";
import { ICounterService } from "./ICounterService";

export class CounterService implements ICounterService {
     
    constructor(@InjectValue('counterConfig') private config: CounterConfig) {
    }

    public* getCounter(): IterableIterator<number> {
        let n = this.config.startNum - 1;
        while (n < this.config.endNum) {
            n = n + this.config.increment;
            yield n;
        }
    }
}
