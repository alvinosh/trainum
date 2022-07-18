import { AuthService } from '../auth.service';
import { Test } from '@nestjs/testing';
import { Token } from '@trainum/models/types';
import { signupStub, userStub } from './stubs';
import { PrismaService } from '../../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { User } from '@trainum/models/entities';
import { ATPayload } from '@trainum/models/auth';

describe('AuthController', () => {
  let authService: AuthService;
  let prisma: PrismaService;
  let jwt: JwtService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [],
      providers: [AuthService, PrismaService, ConfigService, JwtService],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    prisma = module.get<PrismaService>(PrismaService);
    jwt = module.get<JwtService>(JwtService);

    jest.clearAllMocks();
  });

  describe('signup', () => {
    describe('when singup is properly called', () => {
      let token: Token;
      let user: User;
      beforeEach(async () => {
        await prisma.user.deleteMany();
        token = await authService.signup(signupStub());
        user = await prisma.user.findUnique({
          where: { username: signupStub().username },
        });
      });

      it('should have created a user', () => {
        expect(user.email).toEqual(userStub().email);
      });

      it('should have returned an access token with a sub', () => {
        expect(jwt.decode(token.accessToken)['sub']).toEqual(user.id);
      });

      it('should have returned a refresh token with a sub', () => {
        expect(jwt.decode(token.refreshToken)['sub']).toEqual(user.id);
      });
    });
  });
});
