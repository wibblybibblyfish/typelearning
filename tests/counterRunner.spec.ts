import { ICounterService } from "../src/counterService";
import { anyNumber, anyOfClass, anyString, anything, instance, mock, verify, when } from "ts-mockito";
import { INumberAnalyser } from "../src/numberAnalyser";
import { INumberFormatter } from "../src/numberFormatter";
import { ILogger } from "../src/logger";
import { CounterRunner } from "../src/counterRunner";
import { count } from "console";
import { NumberMatcherType } from "../src/numberMatcher";

describe('CounterRunner', () => {
    
    describe('run()', () => {
        it('Should run through numbers in sequence replacing appropriately', () => {
            // Given
            const counterService = mock<ICounterService>();
            when(counterService.start()).thenReturn(1);
            when(counterService.hasNext(anyNumber())).thenReturn(true).thenReturn(false);
            when(counterService.getNext(anyNumber())).thenReturn(2);

            var emptyResult: NumberMatcherType[] = [];
            var singleResult: NumberMatcherType[] = [NumberMatcherType.MutlipleOfThree];

            const analyser = mock<INumberAnalyser>();
            when(analyser.analyse(anyNumber())).thenReturn(emptyResult).thenReturn(singleResult);

            const formatter = mock<INumberFormatter>();
            when(formatter.format(anyNumber(), anything())).thenReturn("1").thenReturn("replaced");

            const logger = mock<ILogger>();
            
            const service = new CounterRunner(instance(counterService), instance(analyser), instance(formatter), instance(logger));
            
            // When
            service.run();
         
            // Then
            verify(counterService.start()).once();
            verify(counterService.hasNext(1)).once();
            verify(counterService.hasNext(2)).once();
            verify(counterService.getNext(1)).once();
            verify(analyser.analyse(1)).once();
            verify(analyser.analyse(2)).once();
            verify(formatter.format(1, emptyResult)).once();
            verify(formatter.format(2, singleResult)).once();
            verify(logger.log("1")).once();
            verify(logger.log("replaced")).once();
        });
    });
});