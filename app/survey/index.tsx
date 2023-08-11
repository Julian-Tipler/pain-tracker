import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { hardcodedSurvey } from "../../helpers/hardcodedSurvery";
import { Prompt } from "../../types/promptTypes";
import { PromptContainer } from "./PromptContainer";
import { Button } from "react-native-paper";

export default function Survey() {
  const [currentPromptIndex, setCurrentPromptIndex] = React.useState<number>(0);

  const handleNextPrompt = () => {
    if (currentPromptIndex < hardcodedSurvey.prompts.length - 1) {
      // If there is a next prompt, increment the index
      setCurrentPromptIndex((prevIndex) => prevIndex + 1);
    } else {
      // Handle the case when the last prompt is reached or some other behavior
      // For example, you can submit the survey or show a message to the user.
    }
  };

  return (
    <View>
      {hardcodedSurvey.prompts.map((prompt: Prompt, i: number) => {
        return <PromptContainer prompt={prompt} key={`prompt-${i}`} />;
      })}
      <View style={styles.navigationButtons}>
        <Button
          icon="arrow-left-bold"
          mode="contained"
          onPress={handleNextPrompt}
        >
          Back
        </Button>
        <Button
          icon="arrow-right-bold"
          mode="contained"
          onPress={handleNextPrompt}
          contentStyle={{ flexDirection: "row-reverse" }}
        >
          Next
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navigationButtons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
