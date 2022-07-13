import { Injectable } from '@angular/core';
import { ATPayload, RTPayload } from '@trainum/models/auth';
import { Token } from '@trainum/models/types';
import { JwtService } from '../../shared/services/jwt.service';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private readonly TOKEN_KEY = 'token';

  constructor(private jwtService: JwtService) {}

  saveToken(token: Token) {
    localStorage.setItem(this.TOKEN_KEY, JSON.stringify(token));
  }

  getToken(): Token {
    const token_string = localStorage.getItem(this.TOKEN_KEY);
    if (!token_string) throw new Error('No token found');
    return JSON.parse(token_string);
  }

  removeToken() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  parseAToken(): ATPayload {
    const token = this.getToken();
    return this.jwtService.decodeAToken(token);
  }

  parseRToken(): RTPayload {
    const token = this.getToken();
    return this.jwtService.decodeRToken(token);
  }
}
