import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TargetaServeiComponent } from '../targeta-serveis/targeta-servei.component';
import { ServeiCataleg } from '../../models/servei.model';

@Component({
  selector: 'app-llista-serveis',
  standalone: true,
  imports: [CommonModule, TargetaServeiComponent],
  templateUrl: './llista-servei.component.html',
  styleUrls: ['./llista-servei.component.css'],
})
export class LlistaServeisComponent {
  @Input() elements: ServeiCataleg[] = [];

  trackById(index: number, element: ServeiCataleg): number {
    return element.id;
  }
}
