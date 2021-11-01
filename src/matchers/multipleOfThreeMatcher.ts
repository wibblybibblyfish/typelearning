import { INumberMatcher } from "./INumberMatcher";
import { NumberMatcherType } from "./numberMatcherType";


export class multipleOfThreeMatcher implements INumberMatcher {

    public matcherType: NumberMatcherType = NumberMatcherType.MutlipleOfThree;

    public matches(input: number): boolean {
        if (input % 3 == 0)
            return true;

        return false;
    }
}
