import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TargetaElementComponent } from '../targeta-serveis/targeta-servei.component';
import { Servei } from '../../models/servei.model';

@Component({
  selector: 'app-llista-serveis',
  standalone: true,
  imports: [CommonModule, TargetaElementComponent],
  templateUrl: './llista-servei.component.html',
  styleUrls: ['./llista-servei.component.css'],
})
export class LlistaServeisComponent {
  @Input() elements: Servei[] = [];

  trackById(index: number, element: Servei): number {
    return element.id;
  }
}
