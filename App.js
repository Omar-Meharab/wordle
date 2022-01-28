import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeArea } from "react-native";
import { colors } from "./src/constants";

export default function App() {
  return (
    <SafeArea style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>WORDLE</Text>
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: "center",
  },
  title: {
    color: colors.lightgrey,
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 7,
  },
});
