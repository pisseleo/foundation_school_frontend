import { inject, Service } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import {
  HttpClient,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Service()
export class Api {
  private readonly baseUrl = environment.apiUrl;
  private readonly apiVersion = 'v1';
  private readonly http = inject(HttpClient);


  get<T>(endpoint: string, params?: Record<string, string | number | boolean>): Observable<T> {

    let httpParams = new HttpParams();
    if (params) {
      for (const key in params) {
        if (params.hasOwnProperty(key)) {
          httpParams = httpParams.set(key, String(params[key]));
        }
      }
    }

    return this.http.get<T>(`${this.baseUrl}/${this.apiVersion}/${endpoint}`, { params: httpParams });
  }

  post<T>(endpoint: string, body: any): Observable<T> {

    return this.http.post<T>(`${this.baseUrl}/${this.apiVersion}/${endpoint}`, body);
  }

  put<T>(endpoint: string, body: any): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${this.apiVersion}/${endpoint}`, body);
  }

  patch<T>(
    endpoint: string,
    body?: unknown
  ): Observable<T> {
    return this.http.patch<T>(
      `${this.baseUrl}${endpoint}`,
      body
    );
  }

  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${this.apiVersion}/${endpoint}`);
  }
}
