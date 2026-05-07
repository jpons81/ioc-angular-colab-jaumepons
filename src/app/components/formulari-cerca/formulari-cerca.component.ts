import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  AsyncValidatorFn,
} from '@angular/forms';
import { debounceTime, map, of, switchMap, timer } from 'rxjs';

@Component({
  selector: 'app-formulari-cerca',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulari-cerca.component.html',
  styleUrls: ['./formulari-cerca.component.css'],
})
export class FormulariCercaComponent {
  @Output() cerca = new EventEmitter<string>();

  form: FormGroup;
  validant = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      termeCerca: [
        '',
        [Validators.minLength(2), Validators.maxLength(50)],
        [this.codiDisponibleValidator()],
      ],
    });

    // 🔥 Sempre emet el text (encara que hi hagi errors)
    this.form
      .get('termeCerca')!
      .valueChanges.pipe(debounceTime(400))
      .subscribe((valor) => {
        const text = (valor || '').trim();
        this.cerca.emit(text);
      });

    // 🔥 Quan el camp és vàlid → torna a emetre el text
    this.form.statusChanges.subscribe((status) => {
      if (status === 'VALID') {
        const text = (this.terme?.value || '').trim();
        this.cerca.emit(text);
      }
    });
  }

  codiDisponibleValidator(): AsyncValidatorFn {
    return (control: AbstractControl) => {
      if (!control.value || control.value.length < 2) {
        return of(null);
      }

      this.validant = true;

      return timer(300).pipe(
        map(() => {
          this.validant = false;
          return null; // 🔥 mai marquem error per “no hi ha resultats”
        }),
      );
    };
  }

  private simularConsulta(text: string): boolean {
    const base = ['logo', 'pintor', 'web', 'cuiner', 'música'];
    return base.some((item) => item.includes(text.toLowerCase()));
  }

  netejar() {
    this.form.reset();
  }

  get terme() {
    return this.form.get('termeCerca');
  }
}
