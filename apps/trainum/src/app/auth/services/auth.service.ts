import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';

import { CreateUserDto, LoginUserDto } from '@trainum/models/auth';
import { User } from '@trainum/models/entities';
import { ApiResponse, Token } from '@trainum/models/types';

import { Observable, pluck, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly ROUTES = {
    login: () => this.api.createUrl('auth/local/login'),
    signup: () => this.api.createUrl('auth/local/signup'),
    logout: () => this.api.createUrl('auth/logout'),

    usernameExists: (username: string) =>
      this.api.createUrlWithPathVariables('auth/username-exists', [username]),

    emailExists: (username: string) =>
      this.api.createUrlWithPathVariables('auth/email-exists', [username]),
  };

  constructor(
    private api: ApiService,
    private tokenService: TokenService,
    private http: HttpClient
  ) {}

  public login(dto: LoginUserDto): Observable<Token> {
    return this.http
      .post<ApiResponse<Token>>(this.ROUTES.login(), dto)
      .pipe(pluck('body'));
  }

  public signup(dto: CreateUserDto): Observable<Token> {
    return this.http
      .post<Token>(this.ROUTES.signup(), dto)
      .pipe(tap((response) => this.tokenService.saveToken(response)));
  }

  public logout(): Observable<User> {
    return this.http.post<User>(this.ROUTES.logout(), {});
  }

  public usernameExists(username: string): Observable<boolean> {
    return this.http.get<boolean>(this.ROUTES.usernameExists(username));
  }

  public emailExists(email: string): Observable<boolean> {
    return this.http.get<boolean>(this.ROUTES.emailExists(email));
  }
}