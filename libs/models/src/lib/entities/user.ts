import { Exercise } from './exercise';

export interface User {
  id: number;

  createdAt: Date;
  updatedAt: Date;

  email: string;
  username: string;

  exercises?: Exercise[];
}
