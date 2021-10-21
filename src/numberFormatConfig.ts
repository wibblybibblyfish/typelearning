import { NumberMatcherType } from "./numberMatcher";

export interface NumberFormatConfig {
    matcherType: NumberMatcherType;
    replacementText: string;
}