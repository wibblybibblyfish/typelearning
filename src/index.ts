import { Container } from "typescript-ioc";
import { ICounterService, CounterService } from "./counter";
import { CounterRunner } from "./counterRunner";

Container.bindName('counterConfig').to({
    startNum: 1,
    endNum: 10,
    increment: 1
});
Container.bind(ICounterService).to(CounterService);

let runner = new CounterRunner();

runner.run();
