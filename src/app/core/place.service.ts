import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Place } from './models/place.model';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(
    private httpClient: HttpClient
  ) { }


  getAllPlaces() {
    console.log("trayendo places desde el servicio");
    const result = this.httpClient.get<Place[]>(`${environment.API_URL}/places`);
    return result;
  }

  getPlaceById(id: number) {
    return this.httpClient.get<Place>(`${environment.API_URL}/places/${id}`);
  }
}
