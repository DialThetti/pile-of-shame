import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export class HealthService {
  getBaseUrl() {
    return window.location.origin === 'http://localhost:4201'
      ? 'http://localhost:3000'
      : 'https://pile-of-shame-service.onrender.com';
  }

  constructor(private httpClient: HttpClient) {}

  isHealthy(): Observable<boolean> {
    return this.httpClient
      .get(this.getBaseUrl() + '/actuator/health')
      .pipe(map(() => true));
  }
}
