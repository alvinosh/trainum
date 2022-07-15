import { AuthService } from '@api/auth/auth.service';
import { Test } from '@nestjs/testing';

import { AppModule } from '../../../app.module';
import { PrismaService } from '../../../prisma/prisma.service';

describe('AuthService', () => {
  let prisma: PrismaService;
  let authService: AuthService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    prisma = module.get<PrismaService>(PrismaService);
    await prisma.cleanDatabase();
  });

  it.todo('should pass');
});
