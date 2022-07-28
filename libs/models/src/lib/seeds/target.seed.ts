import { Target } from '../entities';
import { Targets } from '../enums';

export const ExerciseTargetSeed = (): Target[] => {
  return Object.values(Targets).map((target, index) => ({
    name: target,
    id: index,
  }));
};
