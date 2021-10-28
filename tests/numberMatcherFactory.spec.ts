import { describe } from 'mocha';
import { expect } from 'chai';
import { NumberMatcherFactory } from '../src/numberMatcherFactory';
import { NumberMatcherType } from '../src/numberMatcher';

describe('NumberMatcherFactory', () => {
    
    describe('build(NumberMatcherType.None))', () => {
        it('should throw an unknown number matcher type error', () => {
            // Given
            const factory = new NumberMatcherFactory();
            const matcherType = NumberMatcherType.None;

            // When
            try {
                factory.build(matcherType);
            } catch (e) {               
                // Then
                expect((<Error>e).message).to.equal("MatcherType " + matcherType.toString() + " is unknown.")
            }
        });
    });

    describe('build(NumberMatcherType.MultipleOfFive))', () => {
        it('should build multiple of five matcher', () => {
            // Given
            const factory = new NumberMatcherFactory();
            const matcherType = NumberMatcherType.MultipleOfFive;

            // When
            const result = factory.build(matcherType);

            // Then
            expect(result.matcherType).equal(matcherType);
        });
    });

    describe('build(NumberMatcherType.MultipleOfThree))', () => {
        it('should build multiple of three matcher', () => {
            // Given
            const factory = new NumberMatcherFactory();
            const matcherType = NumberMatcherType.MutlipleOfThree;

            // When
            const result = factory.build(matcherType);

            // Then
            expect(result.matcherType).equal(matcherType);
        });
    });
})