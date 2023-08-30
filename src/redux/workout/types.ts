export type InitialWorkoutState = {
  value: WorkoutState;
};

export enum WorkoutCategory {
  PUSH,
  PULL,
  LEGS,
}

export type WorkoutState = {
  id: number;
  name: string;
  description: string;
  category: WorkoutCategory;
  weight: number;
  sets: number;
  reps: number;
};

export type InitialWorkoutStateList = {
  value: WorkoutState[];
};
