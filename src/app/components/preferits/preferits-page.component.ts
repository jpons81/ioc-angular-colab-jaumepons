import { Component, OnInit, computed } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { ServeiService } from '../../serveis/servei.service';
import { PreferitsService } from '../../serveis/preferits.service';
import { ServeiCardComponent } from '../servei-card/servei-card.component';
import { PanellPreferitsComponent } from '../panell-preferits/panell-preferits.component';
import { ServeiCataleg } from '../../models/servei.model';

@Component({
  selector: 'app-preferits-page',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    ServeiCardComponent,
    PanellPreferitsComponent,
    CommonModule,
  ],
  templateUrl: './preferits-page.component.html',
  styleUrls: ['./preferits-page.component.css'],
})
export class PreferitsPageComponent implements OnInit {
  preferitsComplets = computed(() => {
    const serveis = this.serveiService.serveis();
    const preferits = this.preferitsService.preferits();

    if (serveis.length === 0) return [];

    return serveis
      .filter((s) => preferits.some((p) => p.id === s.id))
      .map((s) => {
        const p = preferits.find((p) => p.id === s.id);
        return { ...s, notes: p?.notes ?? [] };
      });
  });

  constructor(
    public serveiService: ServeiService,
    public preferitsService: PreferitsService,
  ) {}

  ngOnInit() {
    console.log('🟩 preferitsComplets inicial:', this.preferitsComplets());
    this.serveiService.obtenirTots();
  }
}
