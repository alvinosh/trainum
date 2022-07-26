import { Image } from './image';
import { Target } from './target';
import { User } from './user';

export interface Exercise {
  id: number;

  createdAt: Date;
  updatedAt: Date;

  name: string;
  description?: string;
  images: Image[];
  targets?: Target[];
  type: string;

  userId: number;
  user: User;
}
