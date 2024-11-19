import { Component } from '@angular/core';

import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [RouterModule]
})

export class HomePage  {

  constructor(private router: Router) { }

}