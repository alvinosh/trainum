import { CreateSetDto } from '../set';

export interface CreateWorkoutDto {
  sets: CreateSetDto[];
  name: string;
  date?: Date;
  template?: boolean;
}
