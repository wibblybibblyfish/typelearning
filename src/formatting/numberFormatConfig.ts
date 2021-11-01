import { NumberMatcherType } from "../matchers/numberMatcherType";

export interface NumberFormatConfig {
    matcherType: NumberMatcherType;
    replacementText: string;
}