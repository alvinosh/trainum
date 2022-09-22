import { PartialType } from '@nestjs/mapped-types';
import { CreateSetDto, UpdateSetDto } from '../set';

export interface UpdateWorkoutDto {
  sets: UpdateSetDto[];
  name: string;
  date?: Date;
  template?: boolean;
}
