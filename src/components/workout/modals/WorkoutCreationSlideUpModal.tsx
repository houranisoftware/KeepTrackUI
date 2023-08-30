import {
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native';
import React from 'react';

interface Props {
  visible: boolean;
  onClose: () => void;
}

const WorkoutCreationSlideUpModal: React.FC<Props> = ({visible, onClose}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalTitle}>
            <Text style={styles.text}>Add Workout</Text>
          </View>
          <View style={styles.inputFormContent}>
            <View style={{marginBottom: 20}}>
              <Text style={styles.text}>Workout Name</Text>
              <TextInput placeholder="Ex. Push Ups, Pull Ups, Sit Ups" />
            </View>

            <View style={{marginBottom: 20}}>
              <Text style={styles.text}>Workout Description</Text>
              <TextInput placeholder="Optional" />
            </View>

            <View style={{marginBottom: 20}}>
              <Text style={styles.text}>Weight</Text>
              <TextInput placeholder="Lbs only" keyboardType="numeric" />
            </View>

            <View style={{marginBottom: 20}}>
              <Text style={styles.text}>Reps</Text>
              <TextInput
                placeholder="6, 8, 10, 12 etc."
                keyboardType="numeric"
              />
            </View>

            <View style={{marginBottom: 20}}>
              <Text style={styles.text}>Sets</Text>
              <TextInput placeholder="2, 3, 4 etc." />
            </View>

            <View style={{marginBottom: 20}}>
              <Text style={styles.text}>Category</Text>
              <TextInput placeholder="PUSH, PULL, LEGS" />
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.submitButton} onPress={onClose}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                  }}>
                  Submit
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>Cancel</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalTitle: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  inputFormContent: {
    padding: 20,
    justifyContent: 'center',
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
    backgroundColor: 'black',
    width: '50%',
    bottom: 10,
    marginLeft: 10,
  },
  submitButton: {
    padding: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#ccc',
    backgroundColor: 'black',
    width: '50%',
    bottom: 10,
    marginLeft: 10,
  },
  text: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  // In the future, if you want to make them circles
  // Create two seperate views that divide the main container
  // justify content center for both buttons in their respected
  // view containers
});

export default WorkoutCreationSlideUpModal;
