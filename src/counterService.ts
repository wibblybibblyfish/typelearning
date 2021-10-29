import { InjectValue } from "typescript-ioc";
import { CounterConfig} from "./counterConfig";

export abstract class ICounterService {
    abstract start(): number;
    abstract getNext(current: number): number;
    abstract hasNext(current: number): boolean;
} 
export class CounterService implements ICounterService {
     
    constructor(@InjectValue('counterConfig') private config: CounterConfig) {
    }

    public start(): number {
        return this.config.startNum;
    }

    public getNext(current: number): number {
        if (current < this.config.startNum)
            return this.config.startNum;

        let next = current + this.config.increment;

        if (next > this.config.endNum)
            next = this.config.endNum;

        return next;
    }
    
    public hasNext(current: number) : boolean {
        
        if (current < this.config.startNum)
            return false;

        let next = current + this.config.increment;

        if(next <= this.config.endNum)
            return true;
 
        return false;
    } 
}
