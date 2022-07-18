import { AuthController } from '@api/auth/auth.controller';
import { AuthService } from '../auth.service';
import { Test } from '@nestjs/testing';
import { Token } from '@trainum/models/types';
import { loginStub, signupStub, tokenStub, userStub } from './stubs';
import { User } from '@trainum/models/entities';

jest.mock('../auth.service');

describe('AuthController', () => {
  let authController: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [],
      providers: [AuthService],
      controllers: [AuthController],
    }).compile();

    authController = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
    jest.clearAllMocks();
  });

  describe('signup', () => {
    describe('when signup is called', () => {
      let token: Token;

      beforeEach(async () => {
        token = await authController.signup(signupStub());
      });

      test('then it should call authService.signup', () => {
        expect(authService.signup).toBeCalledWith(signupStub());
      });

      test('then is should return a token', () => {
        expect(token).toEqual(tokenStub());
      });
    });
  });

  describe('login', () => {
    describe('when login is called', () => {
      let token: Token;

      beforeEach(async () => {
        token = await authController.login(loginStub());
      });

      test('then it should call authService.login', () => {
        expect(authService.login).toBeCalledWith(loginStub());
      });

      test('then is should return a token', () => {
        expect(token).toEqual(tokenStub());
      });
    });
  });

  describe('logout', () => {
    describe('when logout is called', () => {
      let user: User;

      beforeEach(async () => {
        user = await authController.logout(userStub().id);
      });

      test('then it should call authService.logout', () => {
        expect(authService.logout).toBeCalledWith(userStub().id);
      });

      test('then is should return a user', () => {
        expect(user).toEqual(userStub());
      });
    });
  });

  describe('usernameExists', () => {
    describe('when usernameExists is called', () => {
      let exists: boolean;
      beforeEach(async () => {
        exists = await authController.usernameExists(userStub().username);
      });

      test('then it should call authService.usernameExists', () => {
        expect(authService.usernameExists).toBeCalledWith(userStub().username);
      });

      test('then is should return a boolean', () => {
        expect(typeof exists).toBe('boolean');
      });
    });
  });

  describe('emailExists', () => {
    describe('when emailExists is called', () => {
      let exists: boolean;
      beforeEach(async () => {
        exists = await authController.emailExists(userStub().email);
      });

      test('then it should call authService.emailExists', () => {
        expect(authService.emailExists).toBeCalledWith(userStub().email);
      });

      test('then is should return a boolean', () => {
        expect(typeof exists).toBe('boolean');
      });
    });
  });
});
