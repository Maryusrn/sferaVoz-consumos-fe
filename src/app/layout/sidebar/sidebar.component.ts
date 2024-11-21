import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'layout-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [RouterLink, NgIf, FormsModule, AsyncPipe],
})

export class SidebarComponent {

}