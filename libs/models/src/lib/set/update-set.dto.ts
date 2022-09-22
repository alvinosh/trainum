import { PartialType } from '@nestjs/mapped-types';
import { CreateSetDto } from './create-set.dto';

export interface UpdateSetDto {
  date: Date;
  exerciseId: number;
  weight: number;
  reps: number;
  time: number;
  rir: number;
}
