import { Exercise } from '../entities';
import { ExerciseType } from '../enums';

export const ExercisesSeed = (): Exercise[] => {
  return [
    {
      id: 0,
      name: 'Bench Press',
      description: 'Chest Exercise',
      type: ExerciseType.Weighted,
      targets: [{ name: 'chest' }, { name: 'shoulders' }],
      images: [],
      equipment: [{ name: 'barbell' }, { name: 'bench' }],
    },
    {
      id: 1,
      name: 'Deadlift',
      description: 'Legs Exercise',
      type: ExerciseType.Weighted,
      targets: [{ name: 'back' }, { name: 'legs' }],
      equipment: [{ name: 'barbell' }],
      images: [],
    },
    {
      id: 2,
      name: 'Squat',
      description: 'Legs Exercise',
      type: ExerciseType.Weighted,
      targets: [{ name: 'back' }, { name: 'legs' }],
      equipment: [{ name: 'barbell' }],
      images: [],
    },
    {
      id: 3,
      name: 'Overhead Press',
      description: 'Shoulders Exercise',
      type: ExerciseType.Weighted,
      targets: [{ name: 'shoulders' }],
      equipment: [{ name: 'barbell' }],
      images: [],
    },
    {
      id: 4,
      name: 'Bicep Curl',
      description: 'Arms Exercise',
      type: ExerciseType.Weighted,
      targets: [{ name: 'arms' }],
      equipment: [{ name: 'barbell' }],
      images: [],
    },
    {
      id: 5,

      name: 'Tricep Pushdown',
      description: 'Arms Exercise',
      type: ExerciseType.Weighted,
      targets: [{ name: 'arms' }],
      equipment: [{ name: 'barbell' }],
      images: [],
    },
    {
      id: 6,

      name: 'Cable Crossover',
      description: 'Arms Exercise',
      type: ExerciseType.Weighted,
      targets: [{ name: 'arms' }],
      equipment: [{ name: 'cable' }],
      images: [],
    },
    {
      id: 7,

      name: 'Cable Curl',
      description: 'Arms Exercise',
      type: ExerciseType.Weighted,
      targets: [{ name: 'arms' }],
      equipment: [{ name: 'cable' }],
      images: [],
    },
    {
      id: 8,

      name: 'Cable Row',
      description: 'Arms Exercise',
      type: ExerciseType.Weighted,
      targets: [{ name: 'arms' }],
      equipment: [{ name: 'cable' }],
      images: [],
    },
    {
      id: 9,

      name: 'Cable Pullover',
      description: 'Arms Exercise',
      type: ExerciseType.Weighted,
      targets: [{ name: 'arms' }],
      equipment: [{ name: 'cable' }],
      images: [],
    },
    {
      id: 10,

      name: 'Plank',
      description: 'Core Exercise',
      type: ExerciseType.Timed,
      targets: [{ name: 'core' }],
      equipment: [{ name: 'none' }],
      images: [],
    },
    {
      id: 11,

      name: 'Leg Press',
      description: 'Legs Exercise',
      type: ExerciseType.Weighted,
      targets: [{ name: 'back' }, { name: 'legs' }],
      equipment: [{ name: 'barbell' }],
      images: [],
    },
    {
      id: 12,

      name: 'Running',
      description: 'Core Exercise',
      type: ExerciseType.Timed,
      targets: [{ name: 'core' }, { name: 'cardio' }],
      equipment: [{ name: 'treadmill' }],
      images: [],
    },
  ];
};
