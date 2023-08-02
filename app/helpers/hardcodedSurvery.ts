export const hardcodedSurvey = {
  id: "mockId",
  name: "mockName",
  day: [
    {
      question: "How was your pain today?",
      answer: {
        type: "scale",
      },
    },
    {
      question: "Did you take your medication today?",
      answer: {
        type: "trueFalse",
      },
    },
    {
      question: "Where is the pain?",
      answer: {
        type: "multiSelect",
        options: ["left-leg, hip, mid-back"],
      },
    },
  ],
  night: [],
};
