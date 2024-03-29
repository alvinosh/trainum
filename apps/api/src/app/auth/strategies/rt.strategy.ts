import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ATPayload, RTPayload } from '@trainum/models/auth';
import { Request } from 'express';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RTStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get<string>('JWT_RT_SECRET'),

      passReqToCallback: true,
    });
  }

  validate(req: Request, payload: ATPayload): RTPayload {
    const refreshToken = req
      ?.get('authorization')
      ?.replace('Bearer', '')
      .trim();

    if (!refreshToken) throw new ForbiddenException('Refresh token malformed');
    return {
      sub: payload.sub,
      refreshToken: refreshToken,
      exp: payload.exp,
      iat: payload.iat,
    };
  }
}
