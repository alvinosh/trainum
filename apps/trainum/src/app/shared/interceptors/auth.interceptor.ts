import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, switchMap } from 'rxjs';
import { AuthService } from '../../auth/services/auth.service';
import { TokenService } from '../../auth/services/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private tokenService: TokenService
  ) {}

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
            if (req.url.includes('/api/auth/refresh')) {
              this.authService.logout().subscribe();
            } else {
              return this.handle401Error(req, next);
            }
          }
          throw error;
        })
      );
    } catch (error) {
      this.authService.logout();
      return next.handle(req);
    }
  }

  private handle401Error(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.authService.refreshToken().pipe(
      switchMap((token) => {
        this.authService.logUserIn(token);
        return next.handle(
          this.addHeader(req, 'Authorization', `Bearer ${token.accessToken}`)
        );
      })
    );
  }

  private addHeader(req: HttpRequest<any>, header: string, value: string) {
    return req.clone({
      headers: req.headers.set(header, value),
    });
  }
}
