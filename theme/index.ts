import { DefaultTheme } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  roundness: 4, // Adjust the corner radius for components
  colors: {
    ...DefaultTheme.colors,
    primary: "#007AFF", // Replace with your primary color
    accent: "#FF9800", // Replace with your accent color
    background: "#F5F5F5", // Replace with your background color
    surface: "#FFFFFF", // Replace with your surface color (main container background)
    text: "#000000", // Replace with your text color
    placeholder: "#9e9e9e", // Replace with your placeholder text color
    backdrop: "#00000070", // Replace with your backdrop color for dialogs and modals
  },
};

export default theme;
