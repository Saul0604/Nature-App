import { Component, OnInit } from '@angular/core';
import { TrailService } from '../../core/trail.service';
import { Trail } from '../../core/models/trail.model';

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
      next: (t) => { 
        console.log('Respuesta del servicio de trails:', t); 
        console.log('Número de trails recibidos:', t?.length || 0);
        this.trails = t || []; 
        this.loading = false; 
      },
      error: (err) => { this.error = err?.message || 'Error cargando senderos'; this.loading = false; }
    });
  }
}
