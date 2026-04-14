import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServeiCataleg } from '../../models/servei.model';
import { PreferitsService } from '../../serveis/preferits.service';

@Component({
  selector: 'app-servei-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servei-card.component.html',
  styleUrls: ['./servei-card.component.scss'],
})
export class ServeiCardComponent {
  @Input() servei!: ServeiCataleg;

  constructor(public preferitsService: PreferitsService) {}

  togglePreferit() {
    if (this.preferitsService.esPreferit(this.servei.id)) {
      this.preferitsService.eliminarPreferit(this.servei.id);
    } else {
      this.preferitsService.afegirPreferit(this.servei);
    }
  }
}
