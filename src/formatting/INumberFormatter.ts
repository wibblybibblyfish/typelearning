import { NumberMatcherType } from "../matchers/numberMatcherType";

export abstract class INumberFormatter {

    abstract format(input: number, matches: NumberMatcherType[]): string;

}
