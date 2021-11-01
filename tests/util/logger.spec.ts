import { Logger } from "../../src/util/logger";
import { capture, spy } from "ts-mockito";
import { expect } from "chai";

describe('Logger', () => {
    
    describe('log(message)', () => {
        it('Should log message to console', () => {
            // Given
            const spiedConsole = spy(console);
            const logger = new Logger();
            
            const msg = 'test message';
            
            // When
            logger.log(msg);
         
            // Then
            expect(capture(spiedConsole.log).last()[0]).equal(msg);
        });
    });
});