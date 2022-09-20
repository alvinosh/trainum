import { Exercise } from './exercise';

export interface User {
  id: number;

  hash?: string;
  salt?: string;

  createdAt: Date;
  updatedAt: Date;

  email: string;
  username: string;

  exercises?: Exercise[];
}
