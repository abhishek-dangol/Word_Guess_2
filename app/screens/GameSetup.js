import { StyleSheet, Text, View, Modal, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import RNPickerSelect from "react-native-picker-select";
import { MaterialIcons } from "@expo/vector-icons";
import colors from '../config/colors';
import AppButton from '../components/AppButton';
import App from '../../App';


const GameSetup = ({ 
    visible,
    onClose,
    onDurationChange,
    onSkipChange,
    onSetChange,
    selectedDuration,
    selectedSkips,
    selectedSet,
}) => {

  const handleSave = () => {
    onClose();
  }

  return (
    <Modal
        visible={visible}
        animationType='slide'
        onRequestClose={onClose}
    >
       <View style={styles.modalContainer}> 
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.modalCloseButton} onPress={onClose}> 
            <MaterialIcons name="close" color={colors.gray} size={30}/>
          </TouchableOpacity>
          <Text style={styles.label}>Select Set: </Text>
          <RNPickerSelect
            onValueChange={(value) => onSetChange(value)}
            items={[
                { label: "Set One", value: "setOne" },
                { label: "Set Two", value: "setTwo" },
            ]}
            style={styles.pickerSelectStyles}
            value={selectedSet}
          />
           <Text style={styles.label}>Select Game Duration: </Text>
        <RNPickerSelect 
            onValueChange={(value) => onDurationChange(value)}
            items={[
                { label: "10 seconds", value: 10 },
                { label: "30 seconds", value: 30 },
                { label: "60 seconds", value: 60 },
                { label: "90 seconds", value: 90 },
                { label: "120 seconds", value: 120 },
            ]}
            style={styles.pickerSelectStyles}
            value={selectedDuration}
        />
        <Text style={styles.label}>Select Number of Skips: </Text>
        <RNPickerSelect 
            onValueChange={(value) => onSkipChange(value)}
            items={[
                { label: "2", value: 2 },
                { label: "3", value: 3 },
                { label: "4", value: 4 },
                { label: "5", value: 5 },
            ]}
            style={styles.pickerSelectStyles}
            value={selectedSkips}
        />
        <AppButton title="Done" onPress={handleSave}/>
        </View>
       </View>
    </Modal>
  )
}

export default GameSetup

const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
      width: "90%",
      paddingLeft: 20,
      paddingBottom: 20,
      backgroundColor: "white",
      borderRadius: 10,
      alignItems: "center",
    },
    label: {
      fontWeight: "bold",
      fontSize: 18,
    },
    modalCloseButton: {
      alignSelf: "flex-end",
    },
    pickerSelectStyles: {
      inputIOS: {
        marginTop: 10,
        marginRight: 20,
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 4,
        color: "black",
        paddingRight: 30,
        backgroundColor: "#f0f0f0",
        marginBottom: 20,
      },
      inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: "purple",
        borderRadius: 8,
        color: "black",
        paddingRight: 30,
        backgroundColor: "#f0f0f0",
        marginBottom: 20,
      },
    },
    saveButton: {
      backgroundColor: "#4CAF50",
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      alignItems: "center",
      marginTop: 20,
      width: "100%",
      marginRight: 20,
    },
    buttonText: {
      color: "#FFFFFF",
      fontSize: 18,
      fontWeight: "bold",
    },
  });