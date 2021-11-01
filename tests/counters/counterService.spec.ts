import { CounterService } from "../../src/counters/counterService";
import { CounterConfig } from "../../src/counters/counterConfig";
import { expect } from "chai";

describe('CounterService', () => {
    
    describe('start()', () => {
        it('Should return start number from configuration', () => {
            // Given
            const config: CounterConfig = {
                                            startNum: 3,
                                            endNum: 15,
                                            increment: 1
                                         };
            
            const service = new CounterService(config);
            
            // When
            var result = service.start();
         
            // Then
            expect(result).equal(3);
        });
    });

    describe('hasNext(withinRange)', () => {
        it('Should return true', () => {
            // Given
            const config: CounterConfig = {
                                            startNum: 1,
                                            endNum: 5,
                                            increment: 1
                                         };
            const input = 2;
            const service = new CounterService(config);
            
            // When
            var result = service.hasNext(input);
         
            // Then
            expect(result).equal(true);
        });
    });

    describe('hasNext(higherThanEnd)', () => {
        it('Should return false', () => {
            // Given
            const config: CounterConfig = {
                                            startNum: 1,
                                            endNum: 5,
                                            increment: 1
                                         };
            const input = 6;
            const service = new CounterService(config);
            
            // When
            var result = service.hasNext(input);
         
            // Then
            expect(result).equal(false);
        });
    });

    describe('hasNext(lowerThanStart)', () => {
        it('Should return false', () => {
            // Given
            const config: CounterConfig = {
                                            startNum: 3,
                                            endNum: 5,
                                            increment: 1
                                         };
            const input = 1;
            const service = new CounterService(config);
            
            // When
            var result = service.hasNext(input);
         
            // Then
            expect(result).equal(false);
        });
    });

    describe('getNext(withinRange)', () => {
        it('Should return next number by increment', () => {
            // Given
            const config: CounterConfig = {
                                            startNum: 1,
                                            endNum: 5,
                                            increment: 1
                                         };
            const input = 2;
            const service = new CounterService(config);
            
            // When
            var result = service.getNext(input);
         
            // Then
            expect(result).equal(3);
        });
    });

    describe('getNext(higherThanEnd)', () => {
        it('Should return end number', () => {
            // Given
            const config: CounterConfig = {
                                            startNum: 1,
                                            endNum: 5,
                                            increment: 1
                                         };
            const input = 6;
            const service = new CounterService(config);
            
            // When
            var result = service.getNext(input);
         
            // Then
            expect(result).equal(5);
        });
    });

    describe('getNext(lowerThanStart)', () => {
        it('Should return start number', () => {
            // Given
            const config: CounterConfig = {
                                            startNum: 3,
                                            endNum: 5,
                                            increment: 1
                                         };
            const input = 1;
            const service = new CounterService(config);
            
            // When
            var result = service.getNext(input);
         
            // Then
            expect(result).equal(3);
        });
    });

});