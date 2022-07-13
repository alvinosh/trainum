import { Injectable } from '@angular/core';
import { ATPayload, RTPayload } from '@trainum/models/auth';
import { Token } from '@trainum/models/types';

import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  decodeAToken(token: Token): ATPayload {
    return jwt_decode(token.accessToken);
  }

  decodeRToken(token: Token): RTPayload {
    return jwt_decode(token.refreshToken);
  }
}
