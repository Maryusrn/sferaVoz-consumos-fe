import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: 'analytics.component.html',
  styleUrls: ['analytics.component.scss'],
  standalone: true,
  imports: []
})

export class AnalyiticsComponent  {

  constructor(private router: Router) {}
  
}