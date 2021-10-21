import { NumberMatcherType } from "./numberMatcher"
import { NumberFormatConfig } from "./numberFormatConfig";
import { InjectValue } from "typescript-ioc";

export abstract class INumberFormatter {

    abstract format(input: number, matches: NumberMatcherType[]): string;

}

export class NumberFormatter implements INumberFormatter {
    
    constructor(@InjectValue('numberFormatConfig') private config: NumberFormatConfig[]) {  
    }

    public format(input: number, matches: NumberMatcherType[]): string {
        
        let formattedNumber: string = '';

        matches.sort((a,b) => a -b).forEach((matchType) => {
            formattedNumber += this.getNumberFormat(matchType)?.replacementText;
        });

        if (formattedNumber == '')
            formattedNumber = input.toString();
        
        return formattedNumber;
    }

    private getNumberFormat(matcherType: NumberMatcherType){
        return this.config.find(item => item.matcherType == matcherType);
    }    
}