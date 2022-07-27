import { Exercise } from '../entities';

export const ExercisesSeed = (): Exercise[] => {
  return [
    {
      name: 'Bench Press',
      description: 'Chest Exercise',
      type: 'weighted',
      targets: [{ name: 'chest' }, { name: 'shoulders' }],
    },
    {
      name: 'Deadlift',
      description: 'Legs Exercise',
      type: 'weighted',
      targets: [{ name: 'back' }, { name: 'legs' }],
    },
  ];
};
