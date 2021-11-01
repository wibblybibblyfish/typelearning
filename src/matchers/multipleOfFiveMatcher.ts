import { INumberMatcher } from "./INumberMatcher";
import { NumberMatcherType } from "./numberMatcherType";


export class multipleOfFiveMatcher implements INumberMatcher {

    public matcherType: NumberMatcherType = NumberMatcherType.MultipleOfFive;

    public matches(input: number): boolean {
        if (input % 5 == 0)
            return true;

        return false;
    }
}
