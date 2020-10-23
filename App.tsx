import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

import Header from "./src/components/Header";
import AppStack from "./src/routes/AppStack"

export default function App() {
  return (
    <>
      <AppStack />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
