import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServeiCataleg } from '../../models/servei.model';

@Component({
  selector: 'app-targeta-servei',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './targeta-servei.component.html',
  styleUrls: ['./targeta-servei.component.css'],
})
export class TargetaServeiComponent {
  @Input() servei!: ServeiCataleg;
}
