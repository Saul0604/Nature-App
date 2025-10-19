import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PlaceService } from '../../core/place.service';
import { Place } from '../../core/models/place.model';

@Component({
  selector: 'app-place-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './place-detail.component.html',
  styleUrl: './place-detail.component.scss'
})
export class PlaceDetailComponent implements OnInit {
  place: Place | null = null;
  loading = false;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private placeService: PlaceService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loading = true;
      this.placeService.getPlaceById(+id).subscribe({
        next: (data) => {
          this.place = data;
          this.loading = false;
        },
        error: (err) => {
          this.error = err?.message || 'Error cargando el lugar';
          this.loading = false;
        }
      });
    }
  }
}
