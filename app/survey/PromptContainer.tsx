import { StyleSheet, Switch, Text, View } from "react-native";
import React from "react";
import { Answer, Options, Prompt } from "../../types/promptTypes";

export const PromptContainer = ({ prompt }: { prompt: Prompt }) => {
  const [response, setResponse] = React.useState<Options | null>(null);
  const question = prompt.question;
  const answer = prompt.answer;
  return (
    <View>
      <Text>{question}</Text>
      {renderAnswer({ answer, setResponse })}
    </View>
  );
};

const renderAnswer = ({
  answer,
  setResponse,
}: {
  answer: Answer;
  setResponse: React.Dispatch<React.SetStateAction<Options | null>>;
}) => {
  switch (answer.type) {
    case "trueFalse":
      return (
        <Switch
          value={false} // You can set the initial value or bind it to some state
          onValueChange={(value) => setResponse(value)}
        />
      );
    case "scale":
    // return (
    //   <Slider
    //     minimumValue={0}
    //     maximumValue={10}
    //     step={1}
    //     value={5} // You can set the initial value or bind it to some state
    //     onValueChange={(value) => setResponse(value)}
    //   />
    // );
    case "singleSelect":
    // return (
    //   <Picker
    //     selectedValue={null} // You can set the initial value or bind it to some state
    //     onValueChange={(value) => setResponse(value)}
    //   >
    //     {/* Replace the options below with your specific options */}
    //     <Picker.Item label="Option 1" value="option1" />
    //     <Picker.Item label="Option 2" value="option2" />
    //     <Picker.Item label="Option 3" value="option3" />
    //   </Picker>
    // );
    case "multiSelect":
    // return <TextInput>{answer.type}</TextInput>;
  }
};

const styles = StyleSheet.create({});
