import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { AlertService } from '../../../services/alert.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
  standalone: true,
  imports: [FormsModule],
})
export class UserRegisterComponent  {
  user = {
    id: '',
    nombre: '',
    email: '',
    password: '',
    cpassword: '',
  };

  errorMessage = '';
  passwordVisible = false;

  constructor(
    private userService: UserService, 
    private router: Router,
    private alertService: AlertService
  ) {}

  isFormComplete(): boolean {
    return this.user.id.trim() !== '' &&
    this.user.nombre.trim() !== '' &&
    this.user.email.trim() !== '' &&
    this.user.password.trim() !== '' &&
    this.user.cpassword.trim() !== ''
  }

  isValidEmail(): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(this.user.email);
  }

  passwordsMatch(): boolean {
    return this.user.password === this.user.cpassword;
  }

  isPasswordValid(): boolean {
    return this.user.password.length >= 8;
  }

  onSubmit(registerForm: NgForm) {
    if (!this.isValidEmail()) {
        this.alertService.showAlert({ type: 'error', message: 'Por favor, introduce un email válido.' });
    return;
    }
    
    // Validar si las contraseñas coinciden
    if (!this.passwordsMatch()) {
        this.alertService.showAlert({ type: 'error', message: 'Las contraseñas no coinciden' });
    return;
    }
    
    // Validar si la contraseña tiene al menos 8 caracteres
    if (!this.isPasswordValid()) {
    this.alertService.showAlert({ type: 'error', message: 'La contraseña debe tener al menos 8 caracteres.' });
    return;
    }
    
    // Llamada al servicio para registrar el usuario
    this.userService.registerUser(this.user).subscribe({
            next: () => {
                this.alertService.showAlert({ type: 'success', message: 'Usuario registrado con éxito' });
                this.router.navigate(['/login']);
            },
    
            error: (err) => {
            this.alertService.showAlert({ type: 'error', message: 'Error al registrar el usuario' });
            }
        });
    }

    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    }
}