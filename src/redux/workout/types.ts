export type InitialWorkoutState = {
  value: WorkoutState;
};

enum WorkoutCategory {
  PUSH,
  PULL,
  LEGS,
}

export type WorkoutState = {
  id: number;
  name: string;
  description: string;
  category: WorkoutCategory;
  sets: number;
  reps: number;
};

export type InitialWorkoutStateList = {
  value: WorkoutState[];
};
