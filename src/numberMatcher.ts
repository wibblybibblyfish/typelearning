import { OnlyInstantiableByContainer, Singleton } from "typescript-ioc";

export enum NumberMatcherType {
    MutlipleOfThree,
    MultipleOfFive
}

export abstract class INumberMatcher {
    abstract matcherType: NumberMatcherType;

    abstract matches(input: number): boolean;
}

export class multipleOfThreeMatcher implements INumberMatcher {
    
    public  matcherType: NumberMatcherType = NumberMatcherType.MutlipleOfThree;

    public matches(input: number): boolean {
        if (input % 3 == 0)
            return true;

        return false;
    }
}

export class multipleOfFiveMatcher implements INumberMatcher {
    
    public matcherType: NumberMatcherType = NumberMatcherType.MultipleOfFive;
    
    public matches(input: number): boolean {
        if (input % 5 == 0)
            return true;

        return false;
    }
}

