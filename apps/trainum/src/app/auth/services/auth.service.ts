import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';

import { CreateUserDto, LoginUserDto } from '@trainum/models/auth';
import { User } from '@trainum/models/entities';
import { Token } from '@trainum/models/types';

import { Observable } from 'rxjs';
import { HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private api: ApiService) {}

  public login(dto: LoginUserDto): Observable<HttpEvent<Token>> {
    return this.api.post<Token>('/auth/local/login', dto);
  }

  public signup(dto: CreateUserDto): Observable<HttpEvent<Token>> {
    return this.api.post<Token>('/auth/local/signup', dto);
  }

  public logout(): Observable<HttpEvent<User>> {
    return this.api.post<User>('/auth/logout', {});
  }
}
