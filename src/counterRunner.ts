import { Inject } from "typescript-ioc";
import { ICounterService } from "./counterService";
import { INumberAnalyser } from "./numberAnalyser";
import { INumberFormatter } from "./numberFormatter";
import { NumberMatcherType } from "./numberMatcher";
import { INumberMatcherFactory } from "./numberMatcherFactory";

export class CounterRunner {
    @Inject
    private counterService!: ICounterService;

    @Inject 
    private analyser!: INumberAnalyser;

    @Inject 
    private formatter!: INumberFormatter;

    private initialised(): boolean {
        if (this.counterService && this.analyser)
            return true;

        return false;
    }

    public run(): void {
        if(this.initialised())
        {
            console.log(this.formatNumber())

            while(this.counterService.next()) 
                console.log(this.formatNumber());
        }
    }

    private formatNumber(): string {
        return this.formatter.format(this.counterService.currentNum, this.analyser.analyse(this.counterService.currentNum));
    }
}