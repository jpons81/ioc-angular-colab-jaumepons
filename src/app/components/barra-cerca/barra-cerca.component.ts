import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-barra-cerca',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './barra-cerca.component.html',
  styleUrls: ['./barra-cerca.component.css'],
})
export class BarraCercaComponent {
  @Output() cercaText = new EventEmitter<string>();

  textCerca: string = '';

  onInput() {
    this.cercaText.emit(this.textCerca);
  }

  onReset() {
    this.textCerca = '';
    this.cercaText.emit('');
  }
}
