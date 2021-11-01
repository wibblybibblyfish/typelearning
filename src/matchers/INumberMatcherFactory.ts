import { NumberMatcherType } from "./numberMatcherType";
import { INumberMatcher } from "./INumberMatcher";

export abstract class INumberMatcherFactory {
    abstract build(matcherType: NumberMatcherType): INumberMatcher;
}
