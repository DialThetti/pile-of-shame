import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { System } from '../models/system.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SystemService {
  getBaseUrl() {
    return window.location.origin === 'http://localhost:4201'
      ? 'http://localhost:3000'
      : 'https://pile-of-shame-service.onrender.com';
  }
  constructor(private httpClient: HttpClient) {}

  saveSystem(system: System): Observable<System> {
    return this.httpClient.post<System>(
      this.getBaseUrl() + '/systems/' + system.id,
      system,
      {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('auth')}`,
        },
      }
    );
  }

  deleteSystem(id: string): Observable<unknown> {
    return this.httpClient.delete<System>(
      this.getBaseUrl() + '/systems/' + id,

      {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('auth')}`,
        },
      }
    );
  }
  loadSystems(): Observable<System[]> {
    return this.httpClient.get<System[]>(this.getBaseUrl() + '/systems', {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('auth')}`,
      },
    });
  }
}
