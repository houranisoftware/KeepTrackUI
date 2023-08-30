import {View, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Text} from 'react-native-svg';

interface Props {
  visible: boolean;
  onClose: () => void;
}

const WorkoutCreationSlideUpModal: React.FC<Props> = ({visible, onClose}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.submitButton} onPress={onClose}>
              <Text>hello</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text>hello</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 20,
    marginBottom: 0,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  cancelButton: {
    padding: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#ccc',
    backgroundColor: 'red',
    width: '50%',
    bottom: 10,
    marginLeft: 10,
  },
  submitButton: {
    padding: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#ccc',
    backgroundColor: 'blue',
    width: '50%',
    bottom: 10,
    marginLeft: 10,
  },
});

export default WorkoutCreationSlideUpModal;
