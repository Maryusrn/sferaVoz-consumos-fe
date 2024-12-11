import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model'


@Component({
  selector: 'layout-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [RouterLink, NgIf, FormsModule, AsyncPipe],
})

export class NavbarComponent implements OnInit{

  userName$: Observable<string | null>;
  userEmail$: Observable<string | null>;
  userInitial: string | null = null;

  constructor(private authService: AuthService) {
    this.userName$ = this.authService.getUserName();
    this.userEmail$ = this.authService.getUserEmail();
  }

  ngOnInit(): void {
    this.userName$.subscribe(userName => {
      console.log('User Name:', userName); // Para verificar si llega el nombre
      if (userName) {
        this.userInitial = userName.charAt(0).toUpperCase();
      }
    });
  }
}