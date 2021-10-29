import { match } from "assert";
import { Inject, InjectValue } from "typescript-ioc";
import { NumberMatcherType } from "./numberMatcher";
import { INumberMatcherFactory } from "./numberMatcherFactory";

export abstract class INumberAnalyser {
    
    abstract analyse(input: Number): NumberMatcherType[];

}

export class NumberAnalyser implements INumberAnalyser {

    private matcherFactory: INumberMatcherFactory;
    
    private matchers: NumberMatcherType[];

    public constructor(@InjectValue('matcherConfig') useMatchers: NumberMatcherType[], @Inject matcherFactory: INumberMatcherFactory){
        this.matchers = useMatchers;
        this.matcherFactory = matcherFactory;
    }

    public analyse(input: number): NumberMatcherType[] {
        let matches: NumberMatcherType[] = [];
        
        this.matchers.forEach((matcherType) => {
            var matcher = this.matcherFactory.build(matcherType);

            if (matcher.matches(input)){
                if (matches.indexOf(matcher.matcherType) == -1)
                    matches.push(matcher.matcherType);
            }
        });

        return matches;
    }
}