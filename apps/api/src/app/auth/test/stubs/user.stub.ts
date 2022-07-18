import { User } from '@trainum/models/entities';

export const userStub = (): User => {
  return {
    email: 'alvihysa@gmail.com',
    username: 'alvihysa',
    id: 1,
    createdAt: new Date('2020-01-01T00:00:00.000Z'),
    updatedAt: new Date('2020-01-01T00:00:00.000Z'),
  };
};
