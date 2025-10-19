import { Component, OnInit } from '@angular/core';
import { TrailService } from '../../core/trail.service';

@Component({
  selector: 'app-senderos.component',
  standalone: false,
  templateUrl: './senderos.component.html',
  styleUrl: './senderos.component.scss'
})
export class SenderosComponent implements OnInit {
  trails: Trail[] = [];
  loading = false;
  error: string | null = null;

  constructor(private trailService: TrailService) {}

  ngOnInit(): void {
    this.loading = true;
    this.trailService.getAllTrails().subscribe({
      next: (t) => { this.trails = t || []; this.loading = false; },
      error: (err) => { this.error = err?.message || 'Error cargando senderos'; this.loading = false; }
    });
  }
}
