import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';

import { CreateUserDto, LoginUserDto } from '@trainum/models/auth';
import { User } from '@trainum/models/entities';
import { ApiResponse, Token } from '@trainum/models/types';

import { Observable, pluck, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly ROUTES = {
    login: () => this.api.createUrl('auth/local/login'),
    signup: () => this.api.createUrl('auth/local/signup'),
    logout: () => this.api.createUrl('auth/logout'),
    refresh: () => this.api.createUrl('auth/refresh'),
    test: () => this.api.createUrl('auth/test'),

    usernameExists: (username: string) =>
      this.api.createUrlWithPathVariables('auth/username-exists', [username]),

    emailExists: (username: string) =>
      this.api.createUrlWithPathVariables('auth/email-exists', [username]),
  };

  constructor(
    private api: ApiService,
    private tokenService: TokenService,
    private http: HttpClient,
    private router: Router
  ) {}

  public login(dto: LoginUserDto): Observable<Token> {
    return this.http
      .post<Token>(this.ROUTES.login(), dto)
      .pipe(tap((response) => this.logUserIn(response)));
  }

  public signup(dto: CreateUserDto): Observable<Token> {
    return this.http
      .post<Token>(this.ROUTES.signup(), dto)
      .pipe(tap((response) => this.logUserIn(response)));
  }

  public logout(): Observable<User> {
    this.tokenService.removeAccessToken();
    this.tokenService.removeRefreshToken();
    this.router.navigate(['/auth']);
    return this.http.post<User>(this.ROUTES.logout(), {});
  }

  public refreshToken(): Observable<Token> {
    return this.http.post<Token>(this.ROUTES.refresh(), {});
  }

  public usernameExists(username: string): Observable<boolean> {
    return this.http.get<boolean>(this.ROUTES.usernameExists(username));
  }

  public emailExists(email: string): Observable<boolean> {
    return this.http.get<boolean>(this.ROUTES.emailExists(email));
  }

  public test(): Observable<any> {
    return this.http.get<any>(this.ROUTES.test());
  }

  public isAuthenticated(): boolean {
    try {
      return !!this.tokenService.getAccessToken();
    } catch (error) {
      // console.error('TOKEN :: ', error);
      return false;
    }
  }

  public logUserIn(token: Token): void {
    this.tokenService.saveAccessToken(token);
    this.tokenService.saveRefreshToken(token);
  }
}
