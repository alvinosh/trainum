import { Exercise } from './exercise';

export interface Set {
  id: number;
  date: Date;
  exercise: Exercise;
  workoutId: number;
  weight: number;
  reps: number;
  time: number;
  rir: number;
}
