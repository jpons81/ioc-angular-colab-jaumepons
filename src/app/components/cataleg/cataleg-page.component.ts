import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ServeiService } from '../../serveis/servei.service';
import { TargetaServeiComponent } from '../targeta-serveis/targeta-servei.component';
import { FormulariCercaComponent } from '../formulari-cerca/formulari-cerca.component';
import { ServeiCardComponent } from '../servei-card/servei-card.component';
import { PanellPreferitsComponent } from '../panell-preferits/panell-preferits.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-cataleg-page',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    RouterLink,
    RouterLinkActive,
    ServeiCardComponent,
    FormulariCercaComponent,
    ScrollingModule,
  ],
  templateUrl: './cataleg-page.component.html',
  styleUrls: ['./cataleg-page.component.scss'],
})
export class CatalegPageComponent implements OnInit {
  constructor(public serveiService: ServeiService) {}

  ngOnInit(): void {
    this.serveiService.obtenirTots();
  }

  reintentar() {
    this.serveiService.obtenirTots();
  }
}
