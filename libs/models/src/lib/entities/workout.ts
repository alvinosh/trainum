import { Set } from './set';

export interface Workout {
  id?: number;

  sets?: Set[];
  date?: Date;

  userId?: number;

  template?: boolean;
}
