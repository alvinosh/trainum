import { jest } from '@jest/globals';
import { CreateUserDto, LoginUserDto } from '@trainum/models/auth';
import { User } from '@trainum/models/entities';
import { Token } from '@trainum/models/types';
import { tokenStub, userStub } from '../test/stubs';

export const AuthService = jest.fn().mockReturnValue({
  signup: jest
    .fn<Promise<Token>, [CreateUserDto]>()
    .mockResolvedValue(tokenStub()),
  login: jest
    .fn<Promise<Token>, [LoginUserDto]>()
    .mockResolvedValue(tokenStub()),
  logout: jest.fn<Promise<User>, [number]>().mockResolvedValue(userStub()),
  refresh: jest
    .fn<Promise<Token>, [number, string]>()
    .mockResolvedValue(tokenStub()),
  usernameExists: jest.fn<Promise<boolean>, [string]>().mockResolvedValue(true),
  emailExists: jest.fn<Promise<boolean>, [string]>().mockResolvedValue(true),
});
