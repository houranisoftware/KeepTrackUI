export type InitialWorkoutState = {
  value: WorkoutState;
};

export type WorkoutState = {
  id: number;
  name: string;
  description: string;
  sets: number;
  reps: number;
};

export type InitialWorkoutStateList = {
  value: WorkoutState[];
};
