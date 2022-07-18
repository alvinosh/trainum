import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { AuthService } from '../../auth/services/auth.service';
import { TokenService } from '../../auth/services/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private tokenService: TokenService
  ) {}

  refreshing = false;

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    try {
      const token = req.url.includes('/api/auth/refresh')
        ? this.tokenService.getRefreshToken()
        : this.tokenService.getAccessToken();

      const auth_with_token = this.addHeader(
        req,
        'Authorization',
        `Bearer ${token}`
      );

      return next.handle(auth_with_token).pipe(
        catchError((error) => {
          if (error.status === 401) {
            this.handle401Error(req, next);
          }
          throw error;
        })
      );
    } catch (error) {
      this.authService.logout();
      return next.handle(req);
    }
  }

  private handle401Error(req: HttpRequest<any>, next: HttpHandler): void {
    if (this.refreshing) return;
    this.refreshing = true;
    this.authService.refreshToken().subscribe({
      next: (response) => {
        this.refreshing = false;
        this.authService.logUserIn(response);
      },
      error: (error) => {
        this.authService.logout();
        throw error;
      },
    });
  }

  private addHeader(req: HttpRequest<any>, header: string, value: string) {
    return req.clone({
      headers: req.headers.set(header, value),
    });
  }
}
