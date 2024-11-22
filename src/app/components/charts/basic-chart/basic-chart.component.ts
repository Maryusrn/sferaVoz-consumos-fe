import { Component, OnInit } from '@angular/core';
import { Chart, LineController, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement } from 'chart.js';

Chart.register(
  LineController,
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement
);

@Component({
  selector: 'basic-chart',
  templateUrl: './basic-chart.component.html',
  standalone: true
})
export class BasicChartComponent implements OnInit {
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb'],
        datasets: [{
          label: '',
          data: [42, 38, 62, 50, 71, 55],
          borderColor: '#b51b72',
          backgroundColor: 'transparent',
          borderWidth: 3,
          tension: 0.4,
          pointRadius: 0,
          pointHoverRadius: 10, 
          pointBackgroundColor: '#b51b72',
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: true,
            intersect: false, 
            mode: 'nearest', 
            callbacks: {
              
              label: function(context) {
                let value = context.raw;
                return `   Valor: ${value}`;
              }
            },
            backgroundColor: '#1E293B',
            bodyColor: '#FFFFFF',
            padding: 10,
            titleColor: '#FFFFFF',
            cornerRadius: 4,
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              color: '#94A3B8',
              font: { size: 10 },
            },
          },
          y: {
            grid: {
              color: '#334155',
              lineWidth: 0.5,
            },
            ticks: {
              color: '#94A3B8',
              font: { size: 10 },
              stepSize: 10
            }
          }
        }
      }
    });
  }
}
