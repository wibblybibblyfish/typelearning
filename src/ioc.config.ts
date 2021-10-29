import { Container,  Scope } from 'typescript-ioc';
import { CounterService, ICounterService } from './counterService';
import { INumberAnalyser, NumberAnalyser } from './numberAnalyser';
import { INumberFormatter, NumberFormatter } from './numberFormatter';
import { NumberMatcherType } from './numberMatcher';
import { INumberMatcherFactory, NumberMatcherFactory } from './numberMatcherFactory';
import { ILogger, Logger } from "./logger";

export class IoCInit {

    public init(): void {
        Container.bindName('counterConfig').to({
            startNum: 1,
            endNum: 15,
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

        Container.bindName('matcherConfig').to(new Array(NumberMatcherType.MultipleOfFive, NumberMatcherType.MutlipleOfThree))

        Container.bind(ICounterService).to(CounterService).scope(Scope.Singleton);
        Container.bind(INumberMatcherFactory).to(NumberMatcherFactory).scope(Scope.Singleton);
        Container.bind(INumberAnalyser).to(NumberAnalyser).scope(Scope.Singleton);
        Container.bind(INumberFormatter).to(NumberFormatter).scope(Scope.Singleton);
        Container.bind(ILogger).to(Logger).scope(Scope.Singleton);
    }

}


