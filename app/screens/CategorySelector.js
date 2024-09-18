import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ScrollView } from 'react-native'
import AppButton from '../components/AppButton';
import colors from '../config/colors';

const CategorySelector = ({ 
    visible, 
    onClose, 
    selectedCategories = ["Food", "Geography"], 
    onSelectCategories /* callback to pass selected categories back to parent */ }) => {

 const [modalSelectedCategories, setModalSelectedCategories] = useState(selectedCategories);

 const categories = [
    "Food", "Hollywood", "Bollywood", "Geography", "Politics", "History", "Arts", "Music"
 ]

 const toggleCategory = (category) => {
    setModalSelectedCategories((prevSelected) => {
        if (prevSelected.includes(category)) {
            return prevSelected.filter((item) => item != category);
        } else {
            return [...prevSelected, category]
        }
    })
 }

 useEffect(() => {
    if (visible){
        setModalSelectedCategories(selectedCategories.length > 0 ? selectedCategories : ["Food", "Geography"]);
    }
 }, [visible, selectedCategories]);

 const handleDone = () => {
    if (onSelectCategories){
        onSelectCategories(modalSelectedCategories);
    }
    onClose();
 }

 const isDoneDisabled = modalSelectedCategories.length < 2;

 // console.log(modalSelectedCategories);

  return (
    <Modal
        visible={visible}
        animationType='slide'
        onRequestClose={onClose}
    >
        <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
                <Text style={styles.title}>Select At Least Two Categories: </Text>
                <ScrollView contentContainerStyle={styles.categoriesContainer}>
                    {categories.map((category) => (
                        <Pressable
                            key={category}
                            style={[
                                styles.categoryButton, modalSelectedCategories.includes(category) && styles.selectedCategory
                            ]}
                            onPress={() => toggleCategory(category)}
                        >
                            <Text
                                style={[
                                styles.categoryText, modalSelectedCategories.includes(category) && styles.selectedCategoryText
                            ]}
                            >{category}</Text>
                        </Pressable>
                    ))}
                </ScrollView>
                <AppButton title="Done" color={isDoneDisabled ? colors.gray : colors.green} onPress={handleDone} disabled={isDoneDisabled}/>
                {isDoneDisabled && (
                    <Text style={styles.warningText}>
                        Please select at least two categories
                    </Text>
                )}
            </View>
        </View>
    </Modal>
  )
}

export default CategorySelector

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        backgroundColor: 'white',
        width: '80%',
        maxHeight: '80%',
        borderRadius: 10,
        padding: 20,
    },
    categoriesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    categoryButton: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 15,
        marginVertical: 5,
        marginHorizontal: 5,
    },
    selectedCategory: {
        backgroundColor: colors.teal,
        borderColor: colors.teal,
      },
      categoryText: {
        color: "#333",
      },
      selectedCategoryText: {
        color: colors.white,
      },
      warningText: {
        color: colors.red,
        textAlign: "center",
        marginTop: 10,
        fontSize: 14,
      },
      
})