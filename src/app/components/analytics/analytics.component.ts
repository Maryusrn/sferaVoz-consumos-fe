import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BasicChartComponent } from '../charts/basic-chart/basic-chart.component';
import { CallsChartComponent } from '../charts/calls-chart/calls-chart.component';

@Component({
  selector: 'app-login-form',
  templateUrl: 'analytics.component.html',
  styleUrls: ['analytics.component.scss'],
  standalone: true,
  imports: [BasicChartComponent, CallsChartComponent]
})

export class AnalyiticsComponent  {

  constructor(private router: Router) {}
  
}