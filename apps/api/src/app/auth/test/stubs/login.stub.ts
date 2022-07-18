import { LoginUserDto } from '@trainum/models/auth';

export const loginStub = (): LoginUserDto => {
  return {
    username: 'alvihysa',
    password: 'password',
  };
};
