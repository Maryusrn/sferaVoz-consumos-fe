import { Component } from '@angular/core';

import { Router, RouterModule } from '@angular/router';
import { LayoutComponent } from '../../layout/layout.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [RouterModule, LayoutComponent]
})

export class HomePage  {

  constructor(private router: Router) { }

}