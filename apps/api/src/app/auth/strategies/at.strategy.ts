import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ATPayload } from '@trainum/models/auth';
import { ConfigService } from '@nestjs/config';

export class ATStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get<string>('JWT_AT_SECRET'),
    });
  }

  validate(payload: ATPayload): ATPayload {
    return { sub: payload.sub };
  }
}
