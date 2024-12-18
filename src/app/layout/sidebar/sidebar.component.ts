import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'layout-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [RouterLink, NgIf, FormsModule, AsyncPipe, NgFor],
})

export class SidebarComponent implements OnInit {

  isAdmin: boolean = false;

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    const role = this.authService.getUserRole();
    if (role == 1) {
      this.isAdmin = true
    }
  }
}