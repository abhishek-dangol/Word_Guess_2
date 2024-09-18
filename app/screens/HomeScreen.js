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
  const [selectedCategories, setSelectedCategories] = useState(["Food", "Geography", "Animals", "Music"]);
  const [selectedSet, setSelectedSet] = useState("setOne");
  const [selectedDuration, setSelectedDuration] = useState(10);
  const [selectedSkips, setSelectedSkips] = useState(2);
  const [team1Name, setTeam1Name] = useState("");
  const [team1Players, setTeam1Players] = useState(2);
  const [team1PlayerNames, setTeam1PlayerName] = useState(["", ""]);
  const [team2Name, setTeam2Name] = useState("");
  const [team2Players, setTeam2Players] = useState(2);
  const [team2PlayerNames, setTeam2PlayerNames] = useState(["", ""]);


  const toggleSelectCategoriesModal = () => {
    setIsSelectCategoriesModalVisible(!isSelectCategoriesModalVisible);
  }

  const toggleGameSetupModal = () => {
    setIsGameSetupModalVisible(!isGameSetupModalVisible);
  }

  const handleStartGame = () => {
    if (!team1Name.trim() || !team2Name.trim()){
      Alert.alert("Team names required!", "Please enter names for both teams.");
      return;
    }
    if (selectedCategories.length >= 2) {
      navigation.navigate("Game", { selectedCategories, selectedSet, selectedDuration, selectedSkips });
    } else {
      Alert.alert("Selection Required", "Please select at least four categories to start the game.");
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

      {/* For debugging */}
      <Text style={styles.selectedCategoriesContainer}>Selected Set: {selectedSet}</Text>
      <Text style={styles.selectedCategoriesContainer}>Selected Duration: {selectedDuration}</Text>
      <Text style={styles.selectedCategoriesContainer}>Selected Skips: {selectedSkips}</Text>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        <AppButton 
          title="Select Categories" 
          color="teal" 
          onPress={toggleSelectCategoriesModal}
        />
        <AppButton 
          title="Game Setup" 
          color="yellow" 
          onPress={toggleGameSetupModal}
        />
        <AppButton 
          title="Start Game" 
          color={selectedCategories.length < 2 ? colors.gray : "green"} 
          onPress={handleStartGame} 
          disabled={selectedCategories.length < 2} 
        />
      </View>

      {/* Modals */}
      <CategorySelector
        visible={isSelectCategoriesModalVisible}
        onClose={toggleSelectCategoriesModal}
        selectedCategories={selectedCategories}
        onSelectCategories={(category) => setSelectedCategories(category)}
      />
      <GameSetup
        visible={isGameSetupModalVisible}
        onClose={toggleGameSetupModal}
        onDurationChange={(duration) => setSelectedDuration(duration)}
        onSkipChange={(skip) => setSelectedSkips(skip)}
        onSetChange={(set) => setSelectedSet(set)}
        selectedSet={selectedSet}
        selectedDuration={selectedDuration}
        selectedSkips={selectedSkips}

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
