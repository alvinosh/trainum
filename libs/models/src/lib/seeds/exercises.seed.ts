import { Exercise } from '../entities';

export const ExercisesSeed = (): Exercise[] => {
  return [
    {
      name: 'Bench Press',
      description: '',
      type: 'weighted',
      targets: [{ name: 'chest' }, { name: 'shoulders' }],
    },
    {
      name: 'Deadlift',
      description: '',
      type: 'weighted',
      targets: [{ name: 'back' }, { name: 'legs' }],
    },
  ];
};
