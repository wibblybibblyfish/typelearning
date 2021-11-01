import { Container,  Scope } from 'typescript-ioc';
import { CounterService } from './counters/counterService';
import { ICounterService } from "./counters/ICounterService";
import { NumberAnalyser } from './analysis/numberAnalyser';
import { INumberAnalyser } from "./analysis/INumberAnalyser";
import { NumberFormatter } from './formatting/numberFormatter';
import { INumberFormatter } from './formatting/INumberFormatter';
import { NumberMatcherType } from './matchers/numberMatcherType';
import { NumberMatcherFactory } from './matchers/numberMatcherFactory';
import { INumberMatcherFactory } from "./matchers/INumberMatcherFactory";
import { Logger } from "./util/logger";
import { ILogger } from "./util/ILogger";

export class DependencyConfig {

    public configure(): void {
        this.bindConfigurations();
        Container.bind(ICounterService).to(CounterService).scope(Scope.Singleton);
        Container.bind(INumberMatcherFactory).to(NumberMatcherFactory).scope(Scope.Singleton);
        Container.bind(INumberAnalyser).to(NumberAnalyser).scope(Scope.Singleton);
        Container.bind(INumberFormatter).to(NumberFormatter).scope(Scope.Singleton);
        Container.bind(ILogger).to(Logger).scope(Scope.Singleton);
    }

    private bindConfigurations(): void {
        Container.bindName('counterConfig').to({
            startNum: 1,
            endNum: 100,
            increment: 1
        });

        Container.bindName('numberFormatConfig').to(
        [{   
                matcherType: NumberMatcherType.MutlipleOfThree,
                replacementText: 'Fizz'
            },
            {
                matcherType: NumberMatcherType.MultipleOfFive,
                replacementText: 'Buzz'
            }]
        );

        Container.bindName('matcherConfig').to([ NumberMatcherType.MultipleOfFive, NumberMatcherType.MutlipleOfThree ])
    }

}


