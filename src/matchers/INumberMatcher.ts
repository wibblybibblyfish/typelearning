import { NumberMatcherType } from "./numberMatcherType";


export abstract class INumberMatcher {
    abstract matcherType: NumberMatcherType;

    abstract matches(input: number): boolean;
}
