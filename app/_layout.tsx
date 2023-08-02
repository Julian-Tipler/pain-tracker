import { Slot } from "expo-router";
import { PaperProvider } from "react-native-paper";
import theme from "./theme";
import { StyleSheet, View } from "react-native";

export default function HomeLayout() {
  return (
    <PaperProvider theme={theme as any}>
      {/* <Header/> */}
      <View style={styles.body}>
        <Slot />
      </View>
      {/* <Footer /> */}
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
  },
});
