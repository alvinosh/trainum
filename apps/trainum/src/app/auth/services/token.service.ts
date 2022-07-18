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

  getAccessToken(): ATPayload {
    const token_string = localStorage.getItem(this.ACCESS_TOKEN_KEY);
    if (!token_string) throw new Error('No token found');
    const payload = this.jwtService.decodeAToken(token_string);
    if (this.jwtService.isAuthTokenExpired(payload)) {
      throw new Error('Access Token expired');
    }
    return payload;
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

  getRefreshToken(): RTPayload {
    const token_string = localStorage.getItem(this.REFRESH_TOKEN_KEY);
    if (!token_string) throw new Error('No token found');
    const payload = this.jwtService.decodeRToken(token_string);
    if (this.jwtService.isRefTokenExpired(payload)) {
      throw new Error('Refresh Token expired');
    }
    return payload;
  }

  removeRefreshToken() {
    localStorage.removeItem(this.REFRESH_TOKEN_KEY);
  }
}
