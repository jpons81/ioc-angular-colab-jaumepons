import { Component } from '@angular/core';
import { BarraCercaComponent } from './components/barra-cerca/barra-cerca.component';
import { LlistaServeisComponent } from './components/llista-serveis/llista-servei.component';
import { DADES } from './mocks/dades-mock';
import { Servei } from './models/servei.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LlistaServeisComponent, BarraCercaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ioc-angular-colab-jaumepons';
  elements: Servei[] = DADES;
  elementsFiltrats: Servei[] = [...this.elements];

  filtraServeis(text: string) {
    this.elementsFiltrats = this.elements.filter(
      (element) =>
        element.serveiSolicitat.toLowerCase().includes(text.toLowerCase()) ||
        element.descripcio.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
