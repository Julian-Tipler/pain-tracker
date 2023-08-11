export const hardcodedSurvey = {
  id: "mockId",
  name: "mockName",
  prompts: [
    {
      question: "How was your pain today?",
      answer: {
        type: "scale",
      },
    },
    {
      question: "Where is the pain?",
      answer: {
        type: "multiSelect",
        options: ["left-leg, hip, mid-back"],
      },
    },
    {
      question: "Did you take your medication today?",
      answer: {
        type: "trueFalse",
      },
    },
  ],
};
