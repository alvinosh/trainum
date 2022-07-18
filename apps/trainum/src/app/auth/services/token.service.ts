import { Injectable } from '@angular/core';
import { ATPayload, RTPayload } from '@trainum/models/auth';
import { Token } from '@trainum/models/types';
import { JwtService } from '../../shared/services/jwt.service';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private readonly ACCESS_TOKEN_KEY = 'ACCESS_TOKEN';
  private readonly REFRESH_TOKEN_KEY = 'REFRESH_TOKEN';

  constructor(private jwtService: JwtService) {}

  saveAccessToken(token: Token) {
    localStorage.setItem(
      this.ACCESS_TOKEN_KEY,
      JSON.stringify(token.accessToken)
    );
  }

  getAccessToken(): string {
    const token_string = localStorage.getItem(this.ACCESS_TOKEN_KEY);
    if (!token_string) throw new Error('No token found');
    return JSON.parse(token_string);
  }

  decodeAccessToken(token: string): ATPayload {
    return this.jwtService.decodeAToken(token);
  }

  removeAccessToken() {
    localStorage.removeItem(this.ACCESS_TOKEN_KEY);
  }

  saveRefreshToken(token: Token) {
    localStorage.setItem(
      this.REFRESH_TOKEN_KEY,
      JSON.stringify(token.refreshToken)
    );
  }

  getRefreshToken(): string {
    const token_string = localStorage.getItem(this.REFRESH_TOKEN_KEY);
    if (!token_string) throw new Error('No token found');
    return JSON.parse(token_string);
  }

  decodeRefreshToken(token: string): RTPayload {
    return this.jwtService.decodeRToken(token);
  }

  removeRefreshToken() {
    localStorage.removeItem(this.REFRESH_TOKEN_KEY);
  }
}
