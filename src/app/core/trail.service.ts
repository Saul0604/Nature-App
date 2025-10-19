import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TrailService {
  constructor(private http: HttpClient) {}

  getAllTrails() {
    return this.http.get<Trail[]>(`${environment.API_URL}/trails`);
  }
}
