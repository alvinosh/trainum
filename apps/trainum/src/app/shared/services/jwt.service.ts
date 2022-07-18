import { Injectable } from '@angular/core';
import { ATPayload, RTPayload } from '@trainum/models/auth';
import { Token } from '@trainum/models/types';

import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  decodeAToken(token: string): ATPayload {
    return jwt_decode(token);
  }

  decodeRToken(token: string): RTPayload {
    return jwt_decode(token);
  }

  isAuthTokenExpired(payload: ATPayload): boolean {
    const now = Date.now().valueOf() / 1000;
    return payload.exp < now;
  }

  isRefTokenExpired(payload: RTPayload): boolean {
    const now = Date.now().valueOf() / 1000;
    return payload.exp < now;
  }
}
