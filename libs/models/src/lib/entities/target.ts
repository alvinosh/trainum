import { Exercise } from './exercise';

export interface Target {
  id?: number;

  createdAt?: Date;
  updatedAt?: Date;

  name?: string;

  exercises?: Exercise[];
}
