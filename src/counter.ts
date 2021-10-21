import { InjectValue } from "typescript-ioc";
import { CounterConfig} from "./counterConfig";

export abstract class ICounterService {
    public currentNum: number = 0;
    abstract next(): boolean;
} 

export class CounterService implements ICounterService {
     
    public currentNum: number;

    constructor(@InjectValue('counterConfig') private config: CounterConfig) {
        this.currentNum = this.config.startNum;     
    }

    public next() : boolean {
        this.currentNum = this.currentNum + this.config.increment;

        if(this.currentNum <= this.config.endNum)
            return true;
 
        return false;
    } 
}
