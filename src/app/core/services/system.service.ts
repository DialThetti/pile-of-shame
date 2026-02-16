import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { System } from '../models/system.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SystemService {
  constructor(private httpClient: HttpClient) {}

  saveSystem(system: System): Observable<System> {
    return this.httpClient.post<System>(
      'http://localhost:3000/systems/' + system.id,
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
      'http://localhost:3000/systems/' + id,

      {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('auth')}`,
        },
      }
    );
  }
  loadSystems(): Observable<System[]> {
    return this.httpClient.get<System[]>('http://localhost:3000/systems', {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('auth')}`,
      },
    });
  }
}
