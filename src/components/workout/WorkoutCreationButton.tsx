import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import WorkoutCreationSlideUpModal from './modals/WorkoutCreationSlideUpModal';
import {WorkoutState} from '../../redux/workout/types';

const WorkoutCreationButton: React.FC = () => {
  const [
    workoutCreationSlideUpModalVisible,
    setWorkoutCreationSlideUpModalVisible,
  ] = useState(false);

  const [workoutData, setWorkoutData] = useState<WorkoutState>(
    {} as WorkoutState,
  );

  const onSubmit = (workout: WorkoutState) => {
    setWorkoutData(workout);
    console.log(workout);
    setWorkoutCreationSlideUpModalVisible(false);
  };
  return (
    <>
      <View style={styles.plusButton}>
        <TouchableOpacity
          onPress={() => setWorkoutCreationSlideUpModalVisible(true)}>
          <FontAwesomeIcon icon={faCirclePlus} size={50} color="black" />
        </TouchableOpacity>
      </View>

      <WorkoutCreationSlideUpModal
        visible={workoutCreationSlideUpModalVisible}
        onClose={() => setWorkoutCreationSlideUpModalVisible(false)}
        onSave={onSubmit}
      />
    </>
  );
};

export default WorkoutCreationButton;

const styles = StyleSheet.create({
  plusButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 20,
  },
});
