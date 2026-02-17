import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { System } from '../models/system.model';
import { map, Observable } from 'rxjs';
import { SystemData } from '../models/system.data';

@Injectable({ providedIn: 'root' })
export class SystemService {
  getBaseUrl() {
    return window.location.origin === 'http://localhost:4201'
      ? 'http://localhost:3000'
      : 'https://pile-of-shame-service.onrender.com';
  }
  constructor(private httpClient: HttpClient) {}

  saveSystem(system: System): Observable<System> {
    return this.httpClient
      .put<SystemData>(this.getBaseUrl() + '/systems/' + system.id, {
        name: system.name,
        fractions: system.fractions.map(f => ({
          id: f.id,
          data: {
            name: f.name,
            units: f.units.map(u => ({
              id: u.id,
              data: {
                ...u,
              },
            })),
          },
        })),
      } as SystemData['data'])
      .pipe(
        map(data => ({
          id: data.id,
          name: data.data.name,
          fractions: data.data.fractions.map(f => ({
            id: f.id,
            name: f.data.name,
            units: f.data.units.map(u => ({
              id: u.id,
              ...u.data,
            })),
          })),
        }))
      );
  }

  deleteSystem(id: string): Observable<unknown> {
    return this.httpClient.delete<System>(this.getBaseUrl() + '/systems/' + id);
  }

  loadSystems(): Observable<System[]> {
    return this.httpClient
      .get<SystemData[]>(this.getBaseUrl() + '/systems')
      .pipe(
        map(dataList =>
          dataList.map(data => ({
            id: data.id,
            name: data.data.name,
            fractions: data.data.fractions.map(f => ({
              id: f.id,
              name: f.data.name,
              units: f.data.units.map(u => ({
                id: u.id,
                ...u.data,
              })),
            })),
          }))
        )
      );
  }
}
