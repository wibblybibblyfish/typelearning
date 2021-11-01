import { NumberMatcherType } from "./numberMatcherType";
import { multipleOfFiveMatcher } from "./multipleOfFiveMatcher";
import { multipleOfThreeMatcher } from "./multipleOfThreeMatcher";
import { INumberMatcher } from "./INumberMatcher";
import { INumberMatcherFactory } from "./INumberMatcherFactory";

export class NumberMatcherFactory implements INumberMatcherFactory {
    
    public build(matcherType: NumberMatcherType): INumberMatcher {
        if (matcherType == NumberMatcherType.MutlipleOfThree)
            return new multipleOfThreeMatcher();

        if (matcherType == NumberMatcherType.MultipleOfFive)
            return new multipleOfFiveMatcher();

        throw new Error("MatcherType " + matcherType.toString() + " is unknown.");
    }

}