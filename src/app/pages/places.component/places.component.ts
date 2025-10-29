import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';
import { PlaceService } from '../../core/place.service';

@Component({
  selector: 'app-places',
  standalone: false,
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss'],
})
export class PlacesComponent implements OnInit {

    map!: mapboxgl.Map;
    style = 'mapbox://styles/mapbox/streets-v12';
    markers: mapboxgl.Marker[] = [];

    constructor(private placeService: PlaceService) { }

    ngOnInit(): void {

      console.log("ngOnInit de places component");
      
      this.map = new mapboxgl.Map({
        accessToken: environment.MAPBOX_TOKEN,
        style: this.style,
        container: 'map',
        zoom: 5,
        center: [-100.684400, 23.706460]//checar estas coordenadas
        //23.41881, -101.484429

    })
    this.placeService.getAllPlaces().subscribe((placeResponse)=>{
        console.log("Respuesta del servicio de places:", placeResponse);
        placeResponse.forEach(place => {
            const marker = new mapboxgl.Marker()
                .setLngLat([place.longitude, place.latitude])
                //.setPopup(new mapboxgl.Popup({ offset: 25 }).setText(place.name))
                .addTo(this.map);
            this.markers.push(marker);
        });
      });
  }
}