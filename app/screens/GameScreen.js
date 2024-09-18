// app/screens/GameScreen.js

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

const GameScreen = ({ route, navigation }) => {
  const { selectedCategories = [] } = route.params || {}; // Safeguard against undefined params

  console.log("Received selected categories in GameScreen: ", selectedCategories);

  const handleBackToHome = () => {
    navigation.goBack(); // Navigate back to HomeScreen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Screen</Text>
      <Text style={styles.subtitle}>Selected Categories:</Text>
      {selectedCategories.length > 0 ? (
        selectedCategories.map((category) => (
          <Text key={category} style={styles.categoryItem}>{category}</Text>
        ))
      ) : (
        <Text>No categories selected.</Text>
      )}
      {/* Add more game-related components here */}
      <AppButton 
        title="Back to Home" 
        color="red" 
        onPress={handleBackToHome} 
      />
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  categoryItem: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
});
