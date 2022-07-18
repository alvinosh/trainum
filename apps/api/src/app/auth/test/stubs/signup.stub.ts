import { CreateUserDto } from '@trainum/models/auth';

export const signupStub = (): CreateUserDto => {
  return {
    email: 'alvihysa@gmail.com',
    username: 'alvihysa',
    password: 'password',
    confirm_password: 'password',
  };
};
