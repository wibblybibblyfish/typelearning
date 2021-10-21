import { describe } from 'mocha';
import { expect } from 'chai';
import { Welcomer } from '../src/welcomer';

describe('Welcomer', () => {
    describe('welcome()', () => {
        it('should return welcome message', () => {
            // Given
            const welcomer = new Welcomer();

            // When
            const message = welcomer.welcome();

            // Then
            expect(message).to.equal('Welcome!');
        });
    });
})