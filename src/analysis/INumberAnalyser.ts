import { NumberMatcherType } from "../matchers/numberMatcherType";

export abstract class INumberAnalyser {

    abstract analyse(input: Number): NumberMatcherType[];

}
