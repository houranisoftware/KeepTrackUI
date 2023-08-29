import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
const WorkoutCreationButton = () => {
  return (
    <TouchableOpacity style={styles.plusButton}>
      <FontAwesomeIcon icon={faCirclePlus} size={50} color="white" />
    </TouchableOpacity>
  );
};

export default WorkoutCreationButton;

const styles = StyleSheet.create({
  plusButton: {top: 2},
});
