import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PlaceService } from '../../core/place.service';
import { Place } from '../../core/models/place.model';
import { AIAnalysisResponse } from '../../core/models/ai-object.model';

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
  
  // Variables para análisis IA
  aiAnalysis: AIAnalysisResponse | null = null;
  aiLoading = false;
  aiError: string | null = null;
  showAiAnalysis = false;

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

  analyzeWithAI(): void {
    this.aiLoading = true;
    this.aiError = null;
    this.showAiAnalysis = true;
    
    const placeId = this.place?.id;
    this.placeService.getAIAnalysis(placeId).subscribe({
      next: (data) => {
        this.aiAnalysis = data;
        this.aiLoading = false;
      },
      error: (err) => {
        this.aiError = err?.error || err?.message || 'Error al analizar con IA';
        this.aiLoading = false;
      }
    });
  }

  toggleAiAnalysis(): void {
    if (!this.showAiAnalysis) {
      if (!this.aiAnalysis) {
        this.analyzeWithAI();
      } else {
        this.showAiAnalysis = true;
      }
    } else {
      this.showAiAnalysis = false;
    }
  }
}
