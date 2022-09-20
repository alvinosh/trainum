import { Workout } from '../entities';
import { CreateWorkoutDto } from '../workouts';

export const WorkoutsSeed = (): CreateWorkoutDto[] => {
  return [
    {
      sets: [],
      date: new Date(),
      template: true,
    },
  ];
};
