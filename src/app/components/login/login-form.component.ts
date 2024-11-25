import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html',
  styleUrls: ['login-form.component.scss'],
  standalone: true,
  imports: [FormsModule],
})

export class LoginFormComponent  {

  constructor(private router: Router) {}
  
  private validUser = {
    username: 'proyectos@pil.es',
    password: 'test1234'
  };

  username: string = '';
  password: string = '';
  errorMessage: string = '';
  passwordVisible: boolean = false;

  onLogin() {
    if (
      this.username === this.validUser.username &&
      this.password === this.validUser.password
    ) {
      console.log('Login exitoso');
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}