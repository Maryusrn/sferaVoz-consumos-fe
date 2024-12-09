import { NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html',
  styleUrls: ['login-form.component.scss'],
  standalone: true,
  imports: [FormsModule],
})

export class LoginFormComponent  {
  user: User = {
    email: '',
    password: '',
};
  errorMessage: string = '';
  passwordVisible: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.user).subscribe(
      token => {
          localStorage.setItem('token', token);
          this.router.navigate(['/dashboard']);
    },
    
      error => {
        console.error('Error de login', error);
        this.errorMessage = 'Usuario o contraseña incorrectos';
      }
    );
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}