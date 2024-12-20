import { Component } from '@angular/core';

import { UserRegisterComponent } from '../../components/users/user-register/user-register.component';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
  standalone: true,
  imports: [UserRegisterComponent]
})

export class RegisterPage  {}