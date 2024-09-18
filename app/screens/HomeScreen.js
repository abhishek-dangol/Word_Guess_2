// app/screens/HomeScreen.js

import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useState } from "react";
import AppButton from "../components/AppButton";
import CategorySelector from "./CategorySelector";
import GameSetup from "./GameSetup";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation(); // Initialize navigation

  const [isSelectCategoriesModalVisible, setIsSelectCategoriesModalVisible] = useState(false);
  const [isGameSetupModalVisible, setIsGameSetupModalVisible] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState(["Food", "Geography"]);

  const handleOpenSelectCategoriesModal = () => {
    setIsSelectCategoriesModalVisible(true);
  };

  const handleCloseSelectCategoriesModal = () => {
    setIsSelectCategoriesModalVisible(false);
  };

  const handleOpenGameSetupModal = () => {
    setIsGameSetupModalVisible(true);
  };

  const handleCloseGameSetupModal = () => {
    setIsGameSetupModalVisible(false);
  };

  const handleSelectCategories = (categories) => {
    setSelectedCategories(categories);
  };

  const handleStartGame = () => {
    if (selectedCategories.length >= 2) {
      navigation.navigate("Game", { selectedCategories });
    } else {
      Alert.alert("Selection Required", "Please select at least two categories to start the game.");
    }
  };

  console.log("Selected categories: ", selectedCategories);

  return (
    <View style={styles.container}>
      {/* Display Selected Categories */}
      <View style={styles.selectedCategoriesContainer}>
        <Text style={styles.selectedCategoriesTitle}>Selected Categories:</Text>
        {selectedCategories.map((category) => (
          <Text key={category} style={styles.selectedCategoryItem}>{category}</Text>
        ))}
      </View>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        <AppButton 
          title="Select Categories" 
          color="teal" 
          onPress={handleOpenSelectCategoriesModal}
        />
        <AppButton 
          title="Start Game" 
          color={selectedCategories.length < 2 ? colors.gray : "green"} 
          onPress={handleStartGame} 
          disabled={selectedCategories.length < 2} 
        />
        <AppButton 
          title="Game Setup" 
          color="yellow" 
          onPress={handleOpenGameSetupModal}
        />
      </View>

      {/* Modals */}
      <CategorySelector
        visible={isSelectCategoriesModalVisible}
        onClose={handleCloseSelectCategoriesModal}
        selectedCategoriesProp={selectedCategories}
        onSelectCategories={handleSelectCategories}
      />
      <GameSetup
        visible={isGameSetupModalVisible}
        onClose={handleCloseGameSetupModal}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container takes up the full screen
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center',     // Centers content horizontally
  },
  buttonsContainer: {
    marginTop: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedCategoriesContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  selectedCategoriesTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  selectedCategoryItem: {
    fontSize: 16,
    color: colors.teal,
  },
});
