import { Equipment } from '../entities';
import { Equipments } from '../enums';

export const ExerciseEquipmentSeed = (): Equipment[] => {
  return Object.values(Equipments).map((equipment, index) => ({
    name: equipment,
    id: index,
  }));
};
