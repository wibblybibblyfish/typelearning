import { expect } from "chai";
import { NumberAnalyser } from "../src/numberAnalyser";
import { INumberMatcher, NumberMatcherType } from "../src/numberMatcher";
import { INumberMatcherFactory } from "../src/numberMatcherFactory";
import { instance, mock, when } from "ts-mockito";

describe('NumberAnalyser', () => {
    
    describe('analyse(matches)', () => {
        it('returns no types if no matches', () => {
            // Given
            const input: number = 1;
            const mockedNumberMatcher: INumberMatcher = mock<INumberMatcher>();
            when(mockedNumberMatcher.matches(input)).thenReturn(false);

            const mockedMatcherFactory = mock<INumberMatcherFactory>();
            when(mockedMatcherFactory.build(NumberMatcherType.MultipleOfFive)).thenReturn(instance(mockedNumberMatcher));
            when(mockedMatcherFactory.build(NumberMatcherType.MutlipleOfThree)).thenReturn(instance(mockedNumberMatcher));
            const matcherFactory = instance(mockedMatcherFactory);

            const analyser = new NumberAnalyser(matcherConfig, matcherFactory);
               
            // When
            let result = analyser.analyse(input); 
         
            // Then
            expect(result).to.eql([]);
        });
    });

    describe('analyse(match)', () => {
        it('returns match if matches', () => {
            // Given
            const input: number = 1;
            const mockedSuccessNumberMatcher: INumberMatcher = mock<INumberMatcher>();
            when(mockedSuccessNumberMatcher.matches(input)).thenReturn(true);

            const mockedNoMatchNumberMatcher: INumberMatcher = mock<INumberMatcher>();
            when(mockedNoMatchNumberMatcher.matches(input)).thenReturn(false);

            const t1: INumberMatcher = instance(mockedSuccessNumberMatcher);
            const t2: INumberMatcher = instance(mockedNoMatchNumberMatcher);

            const mockedMatcherFactory = mock<INumberMatcherFactory>();
            when(mockedMatcherFactory.build(NumberMatcherType.MultipleOfFive)).thenReturn(t1);
            when(mockedMatcherFactory.build(NumberMatcherType.MutlipleOfThree)).thenReturn(t2);
            const matcherFactory = instance(mockedMatcherFactory);

            const analyser = new NumberAnalyser(matcherConfig, matcherFactory);
               
            // When
            var result = analyser.analyse(input); 
         
            // Then      
            expect(result).to.be.equal([NumberMatcherType.MultipleOfFive]);
       });
    });

    const matcherConfig: NumberMatcherType[] = [NumberMatcherType.MultipleOfFive, NumberMatcherType.MutlipleOfThree]
});