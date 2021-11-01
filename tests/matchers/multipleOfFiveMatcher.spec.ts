import { expect } from "chai";
import { multipleOfFiveMatcher } from "../../src/matchers/multipleOfFiveMatcher";
import { NumberMatcherType } from "../../src/matchers/numberMatcherType"; 

describe('MultipleOfFiveMatcher', () => {
    
    describe('matcherType', () => {
        it('Should be multiple of five type', () => {
            // Given
            const matcher = new multipleOfFiveMatcher();
            
            // When
            const result = matcher.matcherType;
         
            // Then
            expect(result).to.equal(NumberMatcherType.MultipleOfFive);
        });
    });

    describe('matches(multipleOfFive)', () => {
        it('Returns true if input is multiple of fove', () => {
            // Given
            const matcher = new multipleOfFiveMatcher();
            const numberToMatch = generateMultiple(5, 5, 100);
            console.log("   match: " + numberToMatch);
            
            // When
            const result = matcher.matches(numberToMatch);
         
            // Then
            expect(result).true;
        });
    });

    describe('matches(!multipleOfFive)', () => {
        it('Returns false if input is not a multiple of five', () => {
            // Given
            const matcher = new multipleOfFiveMatcher();
            const numberToMatch = 9;
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
