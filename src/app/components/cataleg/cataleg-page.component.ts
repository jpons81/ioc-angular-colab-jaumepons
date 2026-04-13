import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { ServeiService } from '../../serveis/servei.service';
import { TargetaServeiComponent } from '../targeta-serveis/targeta-servei.component';
import { BarraCercaComponent } from '../barra-cerca/barra-cerca.component';

@Component({
  selector: 'app-cataleg-page',
  standalone: true,
  imports: [NgIf, NgFor, TargetaServeiComponent, BarraCercaComponent],
  templateUrl: './cataleg-page.component.html',
  styleUrls: ['./cataleg-page.component.scss'],
})
export class CatalegPageComponent implements OnInit {
  constructor(public serveiService: ServeiService) {}

  ngOnInit(): void {
    this.serveiService.obtenirPopulars();
  }

  reintentar() {
    this.serveiService.obtenirPopulars();
  }
}
