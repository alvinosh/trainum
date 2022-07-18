import { Token } from '@trainum/models/types';

export const tokenStub = (): Token => {
  return {
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
  };
};
