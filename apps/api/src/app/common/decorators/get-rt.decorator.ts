import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const RT = createParamDecorator(
  (_data: string, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    return request.user['refreshToken'];
  }
);
