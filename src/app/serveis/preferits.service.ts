import { Injectable, signal, computed } from '@angular/core';
import { ServeiCataleg } from '../models/servei.model';

@Injectable({
  providedIn: 'root',
})
export class PreferitsService {
  private readonly STORAGE_KEY = 'preferits-cataleg';

  preferits = signal<ServeiCataleg[]>([]);

  totalPreferits = computed(() => this.preferits().length);

  constructor() {
    this.carregarPreferits();
  }

  private carregarPreferits(): void {
    try {
      const dades = localStorage.getItem(this.STORAGE_KEY);
      if (dades) {
        const carregats = JSON.parse(dades).map((p: any) => ({
          ...p,
          id: Number(p.id), // 🔥 important
          notes: Array.isArray(p.notes) ? p.notes : [],
        }));

        this.preferits.set(carregats);
      }
    } catch (error) {
      console.error('Error carregant preferits:', error);
      this.preferits.set([]);
    }
  }

  private guardarPreferits(): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.preferits()));
    } catch (error) {
      console.error('Error guardant preferits:', error);
    }
  }

  esPreferit(id: number): boolean {
    return this.preferits().some((e) => Number(e.id) === Number(id));
  }

  eliminarPreferit(id: number): void {
    this.preferits.set(this.preferits().filter((e) => e.id !== id));
    this.guardarPreferits();
  }

  afegirPreferit(element: ServeiCataleg): void {
    if (!this.esPreferit(element.id)) {
      const nou: ServeiCataleg = {
        ...element,
        id: Number(element.id), // 🔥 important
        notes: Array.isArray(element.notes) ? element.notes : [],
      };

      this.preferits.set([...this.preferits(), nou]);
      this.guardarPreferits();
    }
  }

  actualitzarNotes(id: number, notes: string[]) {
    const actualitzats = this.preferits().map((p) =>
      p.id === id ? { ...p, notes } : p,
    );
    this.preferits.set(actualitzats);
    this.guardarPreferits();
  }
}
