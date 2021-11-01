import { NumberFormatter } from "../../src/formatting/numberFormatter";
import { NumberFormatConfig } from "../../src/formatting/numberFormatConfig";
import { NumberMatcherType } from "../../src/matchers/numberMatcherType";
import { expect } from "chai";

describe('NumberFormatter', () => {
    
    describe('format(number, []) - no matching', () => {
        it('should return original number', () => {
            // Given
            const formatter = new NumberFormatter(testConfig);
            const input = 1;
            const matches: NumberMatcherType[] = [];

            // When
            const result = formatter.format(input, matches);

            // Then
            expect(result).to.equal(input.toString())
        });
    });

    describe('format(number, [None]) - unconfigured matching', () => {
        it('should return original number', () => {
            // Given
            const formatter = new NumberFormatter(testConfig);
            const input = 1;
            const matches: NumberMatcherType[] = [NumberMatcherType.None];

            // When
            const result = formatter.format(input, matches);

            // Then
            expect(result).to.equal(input.toString());
        });
    });

    describe('format(number, [MutlipleOfThree]) - single configured match', () => {
        it('should return Tizz', () => {
            // Given
            const formatter = new NumberFormatter(testConfig);
            const input = 1;
            const matches: NumberMatcherType[] = [NumberMatcherType.MutlipleOfThree];

            // When
            const result = formatter.format(input, matches);

            // Then
            expect(result).to.equal('Tizz')
        });
    });

    describe('format(number, [MutlipleOfFive]) - single configured match', () => {
        it('should return Wuzz', () => {
            // Given
            const formatter = new NumberFormatter(testConfig);
            const input = 1;
            const matches: NumberMatcherType[] = [NumberMatcherType.MultipleOfFive];

            // When
            const result = formatter.format(input, matches);

            // Then
            expect(result).to.equal('Wuzz')
        });
    });

    describe('format(number, [MultipleOfThree, MutlipleOfFive]) - multiple configured matches', () => {
        it('should return TizzWuzz', () => {
            // Given
            const formatter = new NumberFormatter(testConfig);
            const input = 1;
            const matches: NumberMatcherType[] = [NumberMatcherType.MutlipleOfThree, NumberMatcherType.MultipleOfFive];

            // When
            const result = formatter.format(input, matches);

            // Then
            expect(result).to.equal('TizzWuzz')
        });
    });

    describe('format(number, [MutlipleOfFive, MultipleOfThree])) - multiple configured matches out of order', () => {
        it('should return TizzWuzz', () => {
            // Given
            const formatter = new NumberFormatter(testConfig);
            const input = 1;
            const matches: NumberMatcherType[] = [NumberMatcherType.MultipleOfFive, NumberMatcherType.MutlipleOfThree];

            // When
            const result = formatter.format(input, matches);

            // Then
            expect(result).to.equal('TizzWuzz')
        });
    });

    describe('format(number, [MutlipleOfThree, MultipleOfThree]) - multple same matches', () => {
        it('should return Tizz', () => {
            // Given
            const formatter = new NumberFormatter(testConfig);
            const input = 1;
            const matches: NumberMatcherType[] = [NumberMatcherType.MutlipleOfThree, NumberMatcherType.MutlipleOfThree];

            // When
            const result = formatter.format(input, matches);

            // Then
            expect(result).to.equal('Tizz')
        });
    });

    describe('format(number, [MutlipleOfThree, MultipleOfThree, MultipleOfFive]) - multiple same and different matches', () => {
        it('should return TizzWuzz', () => {
            // Given
            const formatter = new NumberFormatter(testConfig);
            const input = 1;
            const matches: NumberMatcherType[] = [NumberMatcherType.MutlipleOfThree, NumberMatcherType.MutlipleOfThree, NumberMatcherType.MultipleOfFive];

            // When
            const result = formatter.format(input, matches);

            // Then
            expect(result).to.equal('TizzWuzz')
        });
    });

    const testConfig: NumberFormatConfig[] = [{   
        matcherType: NumberMatcherType.MutlipleOfThree,
        replacementText: 'Tizz'
    },
    {
        matcherType: NumberMatcherType.MultipleOfFive,
        replacementText: 'Wuzz'
    }];

});
