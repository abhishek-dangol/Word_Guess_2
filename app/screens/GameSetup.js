import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import React from 'react'

const GameSetup = ({ visible, onClose }) => {

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
            <Text>This is the Game Setup Modal</Text>
            <Pressable onPress={handleDone}>
                <Text>Done</Text>
            </Pressable>
        </View>
    </Modal>
  )
}

export default GameSetup

const styles = StyleSheet.create({})