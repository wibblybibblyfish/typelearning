import { Container, Scope } from "typescript-ioc";
import { ICounterService, CounterService } from "./counterService";
import { CounterRunner } from "./counterRunner";
import { NumberMatcherType } from "./numberMatcher";
import { INumberMatcherFactory, NumberMatcherFactory } from "./numberMatcherFactory";
import { INumberAnalyser, NumberAnalyser } from "./numberAnalyser";

Container.bindName('counterConfig').to({
    startNum: 1,
    endNum: 15,
    increment: 1
});

Container.bindName('matcherConfig').to(new Array(NumberMatcherType.MultipleOfFive, NumberMatcherType.MutlipleOfThree))

Container.bind(ICounterService).to(CounterService).scope(Scope.Singleton);
Container.bind(INumberMatcherFactory).to(NumberMatcherFactory).scope(Scope.Singleton);
Container.bind(INumberAnalyser).to(NumberAnalyser).scope(Scope.Singleton);

let runner = new CounterRunner();

runner.run();
