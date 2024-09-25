import { Component } from '@angular/core';

import { LoginFormComponent } from '../../../components/login/login-form.component';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  standalone: true,
  imports: [LoginFormComponent]
})

export class LoginPage  {}