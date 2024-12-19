import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-unauthorized',
  templateUrl: 'unauthorized.page.html',
  styleUrls: ['unauthorized.page.scss'],
  standalone: true,
  imports: [RouterLink]
})

export class UnauthorizedPage  {

  constructor(private authService: AuthService) {}

  cerrarsesion(): void {
    this.authService.logout()
  }
}