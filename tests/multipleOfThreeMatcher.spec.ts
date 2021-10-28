import { expect } from "chai";
import { multipleOfThreeMatcher, NumberMatcherType } from "../src/numberMatcher";

describe('MultipleOfThreeMatcher', () => {
    
    describe('matcherType', () => {
        it('Should be multiple of three type', () => {
            // Given
            const matcher = new multipleOfThreeMatcher();
            
            // When
            const result = matcher.matcherType;
         
            // Then
            expect(result).to.equal(NumberMatcherType.MutlipleOfThree);
        });
    });

    describe('matches(multipleOfThree)', () => {
        it('Returns true if input is multiple of three', () => {
            // Given
            const matcher = new multipleOfThreeMatcher();
            const numberToMatch = generateMultiple(3, 3, 999);
            console.log("   match: " + numberToMatch);
            
            // When
            const result = matcher.matches(numberToMatch);
         
            // Then
            expect(result).true;
        });
    });

    describe('matches(!multipleOfThree)', () => {
        it('Returns false if input is not a multiple of three', () => {
            // Given
            const matcher = new multipleOfThreeMatcher();
            const numberToMatch = 7;

            console.log("   match: " + numberToMatch);
            
            // When
            const result = matcher.matches(numberToMatch);
         
            // Then
            expect(result).false;
        });
    });

    // taken from https://stackoverflow.com/questions/67144686/how-to-generate-a-random-multiple-of-a-given-number-bounded-to-a-given-range
    const generateMultiple = (multipleOf: number, min: number, max: number) : number => {
        const low = Math.ceil(min / multipleOf), high = Math.floor(max / multipleOf);
        return low <= high ? 
           (Math.floor(Math.random() * (high - low + 1)) + low) * multipleOf 
           : NaN;
    }
});
