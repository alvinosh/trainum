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
}
