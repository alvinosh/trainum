import { CreateSetDto } from '../set';

export class CreateWorkoutDto {
  sets: CreateSetDto[];
  date?: Date;
  template?: boolean;
}
