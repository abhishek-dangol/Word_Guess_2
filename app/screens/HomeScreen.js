import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppButton from "../components/AppButton";

const HomeScreen = () => {
  return (
    <View style={styles.buttonsContainer}>
      <AppButton title="Select Categories" color="teal" />
      <AppButton title="Start Game" color="green" />
      <AppButton title="Game Setup" color="yellow" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  buttonsContainer: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
