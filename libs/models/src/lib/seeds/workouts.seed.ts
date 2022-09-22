import { Workout } from '../entities';
import { CreateWorkoutDto } from '../workouts';

export const WorkoutsSeed = (): CreateWorkoutDto[] => {
  return [
    {
      name: 'Test',
      sets: [],
      date: new Date(),
      template: true,
    },
  ];
};
