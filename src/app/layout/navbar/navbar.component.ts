import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'layout-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [RouterLink, NgIf, FormsModule, AsyncPipe],
})

export class NavbarComponent {

}