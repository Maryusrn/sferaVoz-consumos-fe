import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BasicChartComponent } from '../charts/basic-chart/basic-chart.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: 'analytics.component.html',
  styleUrls: ['analytics.component.scss'],
  standalone: true,
  imports: [BasicChartComponent]
})

export class AnalyiticsComponent  {

  constructor(private router: Router) {}
  
}