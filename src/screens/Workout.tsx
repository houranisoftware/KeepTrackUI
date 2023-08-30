import {ScrollView, Text, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppSelector} from '../redux/store';
import {WorkoutState} from '../redux/workout/types';
import WorkoutCard from '../components/workout/WorkoutCard';
import WorkoutCreationButton from '../components/workout/WorkoutCreationButton';

const Workout: React.FC = () => {
  const workoutList: WorkoutState[] = useAppSelector(
    state => state.workoutListReducer.value,
  );
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
      <WorkoutCreationButton />
    </>
  );
};

export default Workout;
