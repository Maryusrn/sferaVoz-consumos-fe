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
  public chartDia: Chart | undefined;
  public chartMes: Chart | undefined;
  public chartYear: Chart | undefined;

  ngOnInit(): void {
    this.chartDia = this.createChart('dia', ['00h', '01h', '02h', '03h', '04h', '06h','07h','08h','09h','10h','11h','12h','13h','14h','15h','16h','17h','18h','19h','20h','21h','22h','23h', '24h'], 
      [42, 38, 62, 50, 71, 60, 31, 80, 90, 91, 16, 74, 130, 0, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240]);
    //dependiendo del mes en el que estemos o sea poner dias
    
    this.chartMes = this.createChart('mes', ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21',], 
      [120, 140, 190, 150, 100]);
    
      this.chartYear = this.createChart('year', ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo','Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
       [500, 700, 800, 650, 900]);
  }

  createChart(name: string, labels: string[], data: number[]): Chart {
    return new Chart(name, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: '',
          data: data,
          borderColor: '#b51b72',
          backgroundColor: 'transparent',
          borderWidth: 3,
          tension: 0.4,
          pointRadius: 0,
          pointHoverRadius: 6,
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
              label: function (context) {
                let value = context.raw;
                return `Valor: ${value}`;
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
              color: '#aab3bf',
              lineWidth: 0.3,
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
