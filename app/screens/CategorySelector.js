import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import React from 'react'

const CategorySelector = ({ visible, onClose }) => {

 const handleDone = () => {
    onClose();
 }

  return (
    <Modal
        visible={visible}
        animationType='slide'
        onRequestClose={onClose}
    >
        <View>
            <Text>This is the Category Selector Modal</Text>
            <Pressable onPress={handleDone}>
                <Text>Done</Text>
            </Pressable>
        </View>
    </Modal>
  )
}

export default CategorySelector

const styles = StyleSheet.create({})