import { Inject } from "typescript-ioc";
import { ICounterService } from "./counterService";
import { INumberAnalyser } from "./numberAnalyser";
import { NumberMatcherType } from "./numberMatcher";
import { INumberMatcherFactory } from "./numberMatcherFactory";

export class CounterRunner {
    @Inject
    private counterService!: ICounterService;

    @Inject 
    private analyser!: INumberAnalyser;

    constructor() {
    }

    private initialised(): boolean {
        if (this.counterService && this.analyser)
            return true;

        return false;
    }

    public run(): void {
        if(this.initialised())
        {
            console.log(this.counterService.currentNum)
            console.log(this.analyser.analyse(this.counterService.currentNum));

            while(this.counterService.next()) {
                console.log(this.counterService.currentNum);
                console.log(this.analyser.analyse(this.counterService.currentNum));
            }
        }
    }
}