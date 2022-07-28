import { Exercise } from './exercise';

export interface Equipment {
  id?: number;

  createdAt?: Date;
  updatedAt?: Date;

  name?: string;

  exercises?: Exercise[];
}
