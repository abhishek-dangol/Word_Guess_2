import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import colors from "../config/colors";

const AppButton = ({ title, onPress, color = colors.green, disabled = false }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: disabled ? colors.gray : colors[color] }, disabled && styles.disabledButton, ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.text ]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  disabledButton: {
    opactiy: 0.6,
  }
});
