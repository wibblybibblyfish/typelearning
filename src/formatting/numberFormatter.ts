import { NumberMatcherType } from "../matchers/numberMatcherType"
import { NumberFormatConfig } from "./numberFormatConfig";
import { InjectValue } from "typescript-ioc";
import { INumberFormatter } from "./INumberFormatter";

export class NumberFormatter implements INumberFormatter {
    
    constructor(@InjectValue('numberFormatConfig') private config: NumberFormatConfig[]) {  
    }

    public format(input: number, matches: NumberMatcherType[]): string {
        
        let formattedNumber: string = '';
        let uniqueMatches = Array.from(new Set(matches));
        
        uniqueMatches.sort((a,b) => a -b).forEach((matchType) => { 
            let numberFormat = this.getNumberFormat(matchType);
            if (numberFormat)            
                formattedNumber += numberFormat.replacementText;
        });

        if (formattedNumber == '')
            formattedNumber = input.toString();
        
        return formattedNumber;
    }

    private getNumberFormat(matcherType: NumberMatcherType){
        return this.config.find(item => item.matcherType == matcherType);
    }    
}