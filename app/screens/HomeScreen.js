import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AppButton from "../components/AppButton";
import CategorySelector from "./CategorySelector";
import GameSetup from "./GameSetup";
import colors from "../config/colors";

const HomeScreen = () => {

  const [isSelectCategoriesModalVisible, setIsSelectCategoriesModalVisible] = useState(false);
  const [isGameSetupModalVisible, setIsGameSetupModalVisible] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState(["Food", "Geography"]);

  const handleOpenSelecteCategoriesModal = () => {
    setIsSelectCategoriesModalVisible(true);
  }

  const handleCloseSelectCategoriesModal = () => {
    setIsSelectCategoriesModalVisible(false);
  }

  const handleOpenGameSetupModal = () => {
    setIsGameSetupModalVisible(true);
  }

  const handleCloseGameSetupModal = () => {
    setIsGameSetupModalVisible(false);
  }

  const handleSelectCategories = (categories) => {
    setSelectedCategories(categories);
    
  }

  console.log("Selected categories: ", selectedCategories);

  return (
        <View style={styles.buttonsContainer}>
          <View>
            <Text>Selected Categories: </Text>
            {selectedCategories.map((category) => (
              <Text key={category}>{category}</Text>
            ))}
          </View>
          <AppButton title="Select Categories" color="teal" onPress={handleOpenSelecteCategoriesModal}/>
          <AppButton title="Start Game" color="green" />
          <AppButton title="Game Setup" color="yellow" onPress={handleOpenGameSetupModal}/>
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
  buttonsContainer: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
