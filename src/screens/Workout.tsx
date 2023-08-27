import {ScrollView, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppSelector} from '../redux/store';
import {WorkoutState} from '../redux/workout/types';
const Workout = () => {
  const workoutList: WorkoutState[] = useAppSelector(
    state => state.workoutListReducer.value,
  );
  console.log(workoutList);
  return (
    <SafeAreaView>
      <ScrollView>
        {workoutList.length > 0 ? (
          workoutList.map((workout, index) => (
            <Text key={index}>{workout.name}</Text>
          ))
        ) : (
          <Text>No workouts</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Workout;
