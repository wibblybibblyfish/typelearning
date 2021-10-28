import { load } from "js-yaml";
import { Inject } from "typescript-ioc";
import { ICounterService } from "./counterService";
import { INumberAnalyser } from "./numberAnalyser";
import { INumberFormatter } from "./numberFormatter";
import { NumberMatcherType } from "./numberMatcher";
import { INumberMatcherFactory } from "./numberMatcherFactory";

export class CounterRunner {

    private counterService: ICounterService;
    private analyser: INumberAnalyser;
    private formatter: INumberFormatter;

    public constructor(@Inject counterService: ICounterService, @Inject analyser: INumberAnalyser, @Inject formatter: INumberFormatter){
        this.counterService = counterService;
        this.analyser = analyser;
        this.formatter = formatter;
    }

    private initialised(): boolean {
        if (this.counterService && this.analyser && this.formatter)
            return true;

        return false;
    }

    public run(): void {
        if(!this.initialised())
            return;

        let sequenceNumber = this.counterService.start();
        console.log(this.formatNumber(sequenceNumber))

        while(this.counterService.hasNext(sequenceNumber))  
        {
            sequenceNumber = this.counterService.getNext(sequenceNumber);
            console.log(this.formatNumber(sequenceNumber));
        }
    }

    private formatNumber(currentNumber: number): string {
        return this.formatter.format(currentNumber, this.analyser.analyse(currentNumber));
    }
}