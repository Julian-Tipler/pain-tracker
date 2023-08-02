import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { hardcodedSurvey } from "../helpers/hardcodedSurvery";
import { Prompt } from "../types/promptTypes";
import { PromptContainer } from "./PromptContainer";

export default function Survey() {

  return (
    <View>
      {hardcodedSurvey.day.map((prompt: Prompt, i: number) => {
        return <PromptContainer prompt={prompt} key={`prompt-${i}`} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({});
