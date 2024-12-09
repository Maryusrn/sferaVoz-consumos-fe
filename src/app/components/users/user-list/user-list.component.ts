import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  standalone: true,
  imports: [RouterLink, NgIf, FormsModule, AsyncPipe, NgFor],
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data.map((user: any) => ({
          ...user,
          color: this.generateColorFromName(user.name),
        }));
      },
      (error) => {
        console.error('Error al obtener usuarios:', error);
      }
    );
  }

  private generateColorFromName(name: string): string {
    const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const hue = hash % 360; // Genera un valor de 0 a 359
    return `hsl(${hue}, 70%, 50%)`; // Color HSL
  }

  encodeUserEmail(email: string): string {
    return encodeURIComponent(email);
  }
}