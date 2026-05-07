import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulariCercaComponent } from '../../components/formulari-cerca/formulari-cerca.component';
import { ServeiService } from '../../serveis/servei.service';
import { ServeiCardComponent } from '../../components/servei-card/servei-card.component';

@Component({
  selector: 'app-cerca-page',
  standalone: true,
  imports: [CommonModule, FormulariCercaComponent, ServeiCardComponent],
  templateUrl: './cerca-page.component.html',
  styleUrls: ['./cerca-page.component.css'],
})
export class CercaPageComponent {
  constructor(public serveiService: ServeiService) {
    this.serveiService.serveis.set([]);
    this.serveiService.termeCerca.set('');
  }

  ferCerca(terme: string) {
    this.serveiService.cercar(terme);
  }
}
