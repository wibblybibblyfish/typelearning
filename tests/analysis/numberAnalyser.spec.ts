import { expect } from "chai";
import { NumberAnalyser } from "../../src/analysis/numberAnalyser";
import { INumberMatcher } from "../../src/matchers/INumberMatcher";
import { NumberMatcherType } from "../../src/matchers/numberMatcherType" 
import { INumberMatcherFactory } from "../../src/matchers/INumberMatcherFactory";
import { NumberMatcherFactory } from "../../src/matchers/numberMatcherFactory";
import { instance, mock, when } from "ts-mockito";

describe('NumberAnalyser', () => {
    
    describe('analyse(matches)', () => {
        it('returns no result if no matches', () => {
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
        it('returns single match if matches', () => {
            // Given
            const input: number = 1;
            const mockedSuccessNumberMatcher: INumberMatcher = mock<INumberMatcher>();
            when(mockedSuccessNumberMatcher.matches(input)).thenReturn(true);
            when(mockedSuccessNumberMatcher.matcherType).thenReturn(NumberMatcherType.MultipleOfFive);

            const mockedNoMatchNumberMatcher: INumberMatcher = mock<INumberMatcher>();
            when(mockedNoMatchNumberMatcher.matches(input)).thenReturn(false);

            const mockedMatcherFactory = mock<INumberMatcherFactory>();
            when(mockedMatcherFactory.build(NumberMatcherType.MultipleOfFive)).thenReturn(instance(mockedSuccessNumberMatcher));
            when(mockedMatcherFactory.build(NumberMatcherType.MutlipleOfThree)).thenReturn(instance(mockedNoMatchNumberMatcher));
            const matcherFactory = instance(mockedMatcherFactory);

            const analyser = new NumberAnalyser(matcherConfig, matcherFactory);
               
            // When
            var result = analyser.analyse(input); 
         
            // Then 
            expect(result).to.have.length(1);     
            expect(result).to.eql([NumberMatcherType.MultipleOfFive]);
       });
    });

    
    describe('analyse(match)', () => {
        it('returns multiple matches if matches multiple matchers', () => {
            // Given
            const input: number = 1;
            const mockedMultipleOfThreeNumberMatcher: INumberMatcher = mock<INumberMatcher>();
            when(mockedMultipleOfThreeNumberMatcher.matches(input)).thenReturn(true);
            when(mockedMultipleOfThreeNumberMatcher.matcherType).thenReturn(NumberMatcherType.MutlipleOfThree);   
            const mockedMultipleOfFiveNumberMatcher: INumberMatcher = mock<INumberMatcher>();
            when(mockedMultipleOfFiveNumberMatcher.matches(input)).thenReturn(true);
            when(mockedMultipleOfFiveNumberMatcher.matcherType).thenReturn(NumberMatcherType.MultipleOfFive);           

            const mockedMatcherFactory = mock<INumberMatcherFactory>();
            when(mockedMatcherFactory.build(NumberMatcherType.MultipleOfFive)).thenReturn(instance(mockedMultipleOfFiveNumberMatcher));
            when(mockedMatcherFactory.build(NumberMatcherType.MutlipleOfThree)).thenReturn(instance(mockedMultipleOfThreeNumberMatcher));
            const matcherFactory: NumberMatcherFactory = instance(mockedMatcherFactory);           

            const analyser = new NumberAnalyser(matcherConfig, matcherFactory);
               
            // When
            var result = analyser.analyse(input); 
         
            // Then   
            expect(result).to.have.length(2);      
            expect(result).to.eql([NumberMatcherType.MultipleOfFive, NumberMatcherType.MutlipleOfThree]);
       });
    });

    describe('analyse(match)', () => {
        it('returns single match if matches multiple same matchers', () => {
            // Given
            const input: number = 1;
            const mockedMultipleOfThreeNumberMatcher: INumberMatcher = mock<INumberMatcher>();
            when(mockedMultipleOfThreeNumberMatcher.matches(input)).thenReturn(true);
            when(mockedMultipleOfThreeNumberMatcher.matcherType).thenReturn(NumberMatcherType.MutlipleOfThree);         

            const mockedMatcherFactory = mock<INumberMatcherFactory>();
            when(mockedMatcherFactory.build(NumberMatcherType.MultipleOfFive)).thenReturn(instance(mockedMultipleOfThreeNumberMatcher));
            when(mockedMatcherFactory.build(NumberMatcherType.MutlipleOfThree)).thenReturn(instance(mockedMultipleOfThreeNumberMatcher));
            const matcherFactory: NumberMatcherFactory = instance(mockedMatcherFactory);           

            const analyser = new NumberAnalyser(matcherConfig, matcherFactory);
               
            // When
            var result = analyser.analyse(input); 
         
            // Then   
            expect(result).to.have.length(1);      
            expect(result).to.eql([NumberMatcherType.MutlipleOfThree]);
       });
    });


    const matcherConfig: NumberMatcherType[] = [NumberMatcherType.MultipleOfFive, NumberMatcherType.MutlipleOfThree]
});