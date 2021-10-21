import { Inject } from "typescript-ioc";
import { ICounterService } from "./counter";

export class CounterRunner {
    @Inject
    private counterService!: ICounterService;
    
    public run(): void {
        if(this.counterService)
        {
            console.log(this.counterService.currentNum)
            while(this.counterService.next())
                console.log(this.counterService.currentNum);
        }
    }
}