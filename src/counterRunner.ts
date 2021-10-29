import { load } from "js-yaml";
import { Inject } from "typescript-ioc";
import { ICounterService } from "./counterService";
import { INumberAnalyser } from "./numberAnalyser";
import { INumberFormatter } from "./numberFormatter";
import { ILogger } from "./logger";
export class CounterRunner {

    private counterService: ICounterService;
    private analyser: INumberAnalyser;
    private formatter: INumberFormatter;
    private logger: ILogger;

    public constructor(@Inject counterService: ICounterService, @Inject analyser: INumberAnalyser, @Inject formatter: INumberFormatter, @Inject logger: ILogger){
        this.counterService = counterService;
        this.analyser = analyser;
        this.formatter = formatter;
        this.logger = logger;
    }

    public run(): void {
        let sequenceNumber = this.init();

        while(this.counterService.hasNext(sequenceNumber))  
        {
            sequenceNumber = this.counterService.getNext(sequenceNumber);
            this.logger.log(this.formatNumber(sequenceNumber));
        }
    }
    
    private init(): number {
        let startNumber = this.counterService.start();
        this.logger.log(this.formatNumber(startNumber)) 
        return startNumber;
    }

    private formatNumber(currentNumber: number): string {
        return this.formatter.format(currentNumber, this.analyser.analyse(currentNumber));
    }
}