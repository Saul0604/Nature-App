import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../../core/place.service';
import { Place } from '../../core/models/place.model';

@Component({
  selector: 'app-places-list.component',
  standalone: false,
  templateUrl: './places-list.component.html',
  styleUrl: './places-list.component.scss'
})
export class PlacesListComponent implements OnInit {
  places: Place[] = [];
  loading = false;
  error: string | null = null;

  constructor(private placeService: PlaceService) {}

  ngOnInit(): void {
    this.loading = true;
    this.placeService.getAllPlaces().subscribe({
      next: (p) => { this.places = p || []; this.loading = false; },
      error: (err) => { this.error = err?.message || 'Error cargando lugares'; this.loading = false; }
    });
  }
}
