import { INumberMatcher, multipleOfFiveMatcher, multipleOfThreeMatcher, NumberMatcherType } from "./numberMatcher";

export abstract class INumberMatcherFactory {
    abstract build(matcherType: NumberMatcherType): INumberMatcher;
}

export class NumberMatcherFactory implements INumberMatcherFactory {
    
    public build(matcherType: NumberMatcherType): INumberMatcher {
        if (matcherType == NumberMatcherType.MutlipleOfThree)
            return new multipleOfThreeMatcher();

        if (matcherType == NumberMatcherType.MultipleOfFive)
            return new multipleOfFiveMatcher();

        throw new Error("MatcherType " + matcherType.toString() + " is unknown.");
    }

}