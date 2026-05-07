import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServeiApiResponse, ServeiCataleg } from '../models/servei.model';
import { environment } from '../../environments/environment';
import { adaptarServeisApi } from '../adaptadors/servei.adaptador';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServeiService {
  serveis = signal<ServeiCataleg[]>([]);
  carregant = signal<boolean>(true);
  error = signal<string | null>(null);
  termeCerca = signal<string>('');

  private apiUrl = `${environment.apiUrl}/serveis`;

  private timer: any = null;

  constructor(private http: HttpClient) {}

  obtenirPopulars(): void {
    this.carregant.set(true);
    this.error.set(null);

    this.http.get<ServeiApiResponse[]>(this.apiUrl).subscribe({
      next: (res) => {
        console.log('Resposta del servidor:', res);
        const adaptats = adaptarServeisApi(res);

        const populars = adaptats.filter((s) => s.popular === true);

        this.serveis.set(populars);
        this.carregant.set(false);
      },
      error: () => {
        this.error.set('No s’han pogut carregar els serveis populars');
        this.carregant.set(false);
      },
    });
  }

  obtenirTots(): void {
    this.carregant.set(true);
    this.error.set(null);

    this.http.get<ServeiApiResponse[]>(this.apiUrl).subscribe({
      next: (res) => {
        const adaptats = adaptarServeisApi(res);
        this.serveis.set(adaptats);
        this.carregant.set(false);
      },
      error: () => {
        this.error.set('No s’han pogut carregar els serveis');
        this.carregant.set(false);
      },
    });
  }

  cercar(terme: string): void {
    this.error.set(null);
    this.termeCerca.set(terme);

    if (!terme.trim()) {
      this.serveis.set([]);
      this.carregant.set(false);
      return;
    }

    this.carregant.set(true);

    if (this.timer) clearTimeout(this.timer);

    this.timer = setTimeout(() => {
      this.http.get<ServeiApiResponse[]>(this.apiUrl).subscribe({
        next: (res) => {
          const adaptats = adaptarServeisApi(res);
          const t = terme.toLowerCase();
          const filtrats = adaptats.filter((s) =>
            JSON.stringify(s).toLowerCase().includes(t),
          );

          this.serveis.set(filtrats);
          this.carregant.set(false);
        },
        error: () => {
          this.error.set('Error en la cerca de serveis');
          this.carregant.set(false);
        },
      });
    }, 600);
  }

  getServeiById(id: number) {
    return this.http
      .get<ServeiApiResponse>(`${this.apiUrl}/${id}`)
      .pipe(map((res) => adaptarServeisApi([res])[0] || null));
  }
}
