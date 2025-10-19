import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../../core/place.service';
import { Place } from '../../core/models/place.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-places-list.component',
  standalone: true,
  imports: [CommonModule, RouterLink],
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
      next: (p) => { 
        // El backend no está enviando photos, trails ni reviews en la respuesta
        // Necesitas configurar tu API para incluir estas relaciones
        this.places = p || []; 
        this.loading = false; 
      },
      error: (err) => { this.error = err?.message || 'Error cargando lugares'; this.loading = false; }
    });
  }
}
