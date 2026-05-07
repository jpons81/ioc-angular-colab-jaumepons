import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../serveis/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  contrasenya = '';
  error = false;

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  login() {
    this.error = false;

    const ok = this.auth.login(this.email, this.contrasenya);

    if (ok) {
      this.router.navigate(['/preferits']);
    } else {
      this.error = true;
    }
  }
}
