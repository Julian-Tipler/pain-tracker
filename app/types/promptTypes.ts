export type Prompt = {
  question: Question;
  answer: Answer;
};

export type Question = string;
export type Answer = {
  type: "trueFalse" | "scale" | "singleSelect" | "multiSelect";
  options?: Options;
};
export type Options = TrueFalse | Scale | MultiSelect;

type TrueFalse = boolean;
type Scale = number;
type MultiSelect = string[];
