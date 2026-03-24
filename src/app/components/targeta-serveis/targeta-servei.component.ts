import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Servei } from '../../models/servei.model';

@Component({
  selector: 'app-targeta-servei',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './targeta-servei.component.html',
  styleUrls: ['./targeta-servei.component.css'],
})
export class TargetaElementComponent {
  @Input() element!: Servei;
}
