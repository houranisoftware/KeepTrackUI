import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type InitialWorkoutState = {
  value: WorkoutState;
};

type WorkoutState = {
  id: number;
  name: string;
  description: string;
  sets: number;
  reps: number;
};

type WorkoutList = {
  value: WorkoutState[];
};

const initialWorkoutState = {
  value: {
    id: 0,
    name: '',
    description: '',
    sets: 0,
    reps: 0,
  } as WorkoutState,
} as InitialWorkoutState;

const initialWorkoutStateList = {
  value: [] as WorkoutState[],
} as WorkoutList;

export const workout = createSlice({
  name: 'workout',
  initialState: initialWorkoutState,
  reducers: {
    setWorkout: (state, action: PayloadAction<WorkoutState>) => {
      state.value = action.payload;
    },
  },
});

export const workoutList = createSlice({
  name: 'workoutList',
  initialState: initialWorkoutStateList,
  reducers: {
    setWorkoutList: (state, action: PayloadAction<WorkoutState[]>) => {
      state.value = action.payload;
    },
    deleteWorkout: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter(item => item.id !== action.payload);
    },
  },
});

export const {setWorkoutList, deleteWorkout} = workoutList.actions;
export const {setWorkout} = workout.actions;
export default workout.reducer;
