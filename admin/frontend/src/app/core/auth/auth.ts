import { inject, Service } from '@angular/core';
import { Api } from '../services/api';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthenticationRequest, AuthenticationResponse, RegisterRequest } from '../models/auth.model';

@Service()
export class Auth {
  private readonly api = inject(Api);
  private readonly router = inject(Router);

  private readonly TOKEN_KEY = 'foundation_school_token';
login(
    request: AuthenticationRequest
  ): Observable<AuthenticationResponse> {

    return this.api
      .post<AuthenticationResponse>(
        '/api/v1/auth/authenticate',
        request
      )
      .pipe(
        tap(response => {
          if (response.token) {
            this.setToken(response.token);
          }
        })
      );
  }

    register(
    request: RegisterRequest
  ): Observable<AuthenticationResponse> {

    return this.api.post<AuthenticationResponse>(
      '/api/v1/auth/register',
      request
    );
  }

  me(): Observable<unknown> {
    return this.api.get('/api/v1/auth/me');
  }

  verify(token: string): Observable<string> {
    return this.api.get<string>(
      '/api/v1/auth/verify',
      { token }
    );
  }

  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/login']);
  }

}
