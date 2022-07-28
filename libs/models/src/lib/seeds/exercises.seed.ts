import { Exercise } from '../entities';

export const ExercisesSeed = (): Exercise[] => {
  return [
    {
      name: 'Bench Press',
      description: 'Chest Exercise',
      type: 'weighted',
      targets: [{ name: 'chest' }, { name: 'shoulders' }],
      images: [],
      equipment: [{ name: 'barbell' }, { name: 'bench' }],
    },
    {
      name: 'Deadlift',
      description: 'Legs Exercise',
      type: 'weighted',
      targets: [{ name: 'back' }, { name: 'legs' }],
      equipment: [{ name: 'barbell' }],
      images: [],
    },
  ];
};
