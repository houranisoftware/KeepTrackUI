import {MMKV} from 'react-native-mmkv';
import {WorkoutState} from '../redux/workout/types';

const storage = new MMKV();

const workout = {
  id: 0,
  name: '',
  description: '',
  sets: 0,
  reps: 0,
} as WorkoutState;

const jsonData = require('../someTestFile.json');
const workoutList = jsonData as WorkoutState[];

storage.set('workoutList', JSON.stringify(workoutList));
storage.set('workout', JSON.stringify(workout));

export {storage};
