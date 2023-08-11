import { Slot, Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import theme from "../theme";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Tabs } from "expo-router";

export default function StackLayout() {
  return (
    <PaperProvider theme={theme as any}>
      <SafeAreaView style={styles.safeArea}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
  },
  footer: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
