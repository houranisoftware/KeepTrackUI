import {ScrollView, Text, StyleSheet, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppSelector} from '../redux/store';
import {WorkoutState} from '../redux/workout/types';
import WorkoutCard from '../components/workout/WorkoutCard';
import WorkoutCreationButton from '../components/workout/WorkoutCreationButton';
const Workout = () => {
  const workoutList: WorkoutState[] = useAppSelector(
    state => state.workoutListReducer.value,
  );
  console.log(workoutList);
  return (
    <>
      <ScrollView>
        <SafeAreaView>
          {workoutList.length > 0 ? (
            workoutList.map((workout, index) => (
              <WorkoutCard
                key={index}
                name={workout.name}
                description={workout.description}
              />
            ))
          ) : (
            <Text>No workouts</Text>
          )}
        </SafeAreaView>
      </ScrollView>
      <View style={styles.bottomBanner}>
        <WorkoutCreationButton />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  bottomBanner: {
    backgroundColor: 'gray',
    height: 700,
    width: '100%',
    borderRadius: 50,
    top: 500,
    position: 'absolute',
    justifyContent: 'flex-start',
    alignItems: 'center',
    shadowColor: '#fff', // Shadow color
    shadowOffset: {width: 0, height: 5}, // Shadow offset
    shadowOpacity: 0.5, // Shadow opacity
    shadowRadius: 4,
  },
});

export default Workout;
