import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import {
  FormArray,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PreferitsService } from '../../serveis/preferits.service';

@Component({
  selector: 'app-panell-preferits',
  standalone: true,
  imports: [NgFor, NgIf, ReactiveFormsModule],
  templateUrl: './panell-preferits.component.html',
  styleUrls: ['./panell-preferits.component.css'],
})
export class PanellPreferitsComponent {
  formularis: { [id: number]: FormArray<FormControl<string>> } = {};

  constructor(
    public preferitsService: PreferitsService,
    private fb: FormBuilder,
  ) {
    this.inicialitzarFormularis();
  }

  inicialitzarFormularis() {
    this.preferitsService.preferits().forEach((servei) => {
      this.formularis[servei.id] = this.fb.array<FormControl<string>>(
        servei.notes.map((nota: string) =>
          this.fb.control<string>(nota, {
            validators: [Validators.required, Validators.minLength(3)],
            nonNullable: true,
          }),
        ),
      );
    });
  }

  afegirNota(id: number) {
    this.formularis[id].push(
      this.fb.control<string>('', {
        validators: [Validators.required, Validators.minLength(3)],
        nonNullable: true,
      }),
    );
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
