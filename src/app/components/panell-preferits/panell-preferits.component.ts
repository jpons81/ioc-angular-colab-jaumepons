import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import {
  FormArray,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ServeiCataleg } from '../../models/servei.model';
import { PreferitsService } from '../../serveis/preferits.service';

@Component({
  selector: 'app-panell-preferits',
  standalone: true,
  imports: [NgFor, NgIf, ReactiveFormsModule, CommonModule],
  templateUrl: './panell-preferits.component.html',
  styleUrls: ['./panell-preferits.component.css'],
})
export class PanellPreferitsComponent {
  @Input() preferits: ServeiCataleg[] = [];

  formularis: { [id: number]: FormArray<FormControl<string>> } = {};

  constructor(
    public preferitsService: PreferitsService,
    private fb: FormBuilder,
  ) {}

  // 🔥 Reacciona als canvis de l’@Input
  ngOnChanges(changes: SimpleChanges) {
    if (changes['preferits']) {
      console.log('🟦 PANELL: preferits rebuts:', this.preferits);
      this.inicialitzarFormularis(this.preferits);
    }
  }

  inicialitzarFormularis(llista: ServeiCataleg[]) {
    console.log('🟧 Inicialitzant formularis amb:', llista);

    this.formularis = {};

    llista.forEach((servei) => {
      const notes = servei.notes ?? [];

      this.formularis[servei.id] = this.fb.array<FormControl<string>>(
        notes.map((nota) =>
          this.fb.control(nota, {
            validators: [Validators.required, Validators.minLength(3)],
            nonNullable: true,
          }),
        ),
      );
    });

    console.log('🟩 Formularis resultants:', this.formularis);
  }

  afegirNota(id: number) {
    this.formularis[id].push(
      this.fb.control<string>('', {
        validators: [Validators.required, Validators.minLength(3)],
        nonNullable: true,
      }),
    );
    this.guardarNotes(id);
  }

  eliminarNota(id: number, index: number) {
    this.formularis[id].removeAt(index);
    this.guardarNotes(id);
  }

  guardarNotes(id: number) {
    const notes: string[] = this.formularis[id].value;
    this.preferitsService.actualitzarNotes(id, notes);
  }
}
