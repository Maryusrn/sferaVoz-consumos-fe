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
  imports: [RouterLink, NgIf, FormsModule],
})

export class NavbarComponent implements OnInit{

  userName$: Observable<string | null>;
  userEmail$: Observable<string | null>;
  userInitial: string | null = null;

  constructor(private authService: AuthService) {
    this.userName$ = this.authService.getUserName();
    this.userEmail$ = this.authService.getUserEmail();
  }

  cerrarsesion(): void {
    this.authService.logout()
  }

  isAdmin: boolean = false;

  ngOnInit(): void {
    this.userName$.subscribe(userName => {
      if (userName) {
        this.userInitial = userName.charAt(0).toUpperCase();
      }
    });

    const role = this.authService.getUserRole();
    if (role == 1) {
      this.isAdmin = true
    }
  }
}