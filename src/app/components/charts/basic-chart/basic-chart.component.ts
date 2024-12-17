import { Component, OnInit } from '@angular/core';
import { Chart, LineController, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement } from 'chart.js';
import { ConsumosServices } from '../../../services/consumos.service';

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
  standalone: true,
  imports: []
})
export class BasicChartComponent implements OnInit {
  public chartDia: Chart | undefined;
  public chartMes: Chart | undefined;
  public chartYear: Chart | undefined;

  constructor(private consumosService: ConsumosServices) {}

  ngOnInit(): void {
    const currentMonthDays = this.getDaysInMonth();
    this.consumosService.getAllCallsHour().subscribe(data => {
      const consumoshora = this.processData(data);
      this.chartDia = this.createChart('dia', 
        ['00h', '01h', '02h', '03h', '04h', '05h', '06h', '07h', '08h', '09h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h', '19h', '20h', '21h', '22h', '23h'],
        consumoshora
      );
    });

    this.consumosService.getAllCallsMonth().subscribe(data => {
      const consumosmes = this.processData(data);
      this.chartMes = this.createChart('mes', 
        currentMonthDays,
        consumosmes
      );
    });

    this.consumosService.getAllCallsYear().subscribe(data => {
      const consumosyear = this.processData(data);
      this.chartMes = this.createChart('year', 
        ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo','Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        consumosyear
      );
    });
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
        animation: {
          duration: 500,
          easing: 'easeOutQuart',
        },
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
            beginAtZero: true,
            grid: {
              color: '#aab3bf',
              lineWidth: 0.3,
            },
            ticks: {
              color: '#94A3B8',
              font: { size: 12 },
              stepSize: 10
            }
          }
        }
      }
    });
  }

  private processData(data: number[]): number[] {
    return data;
  }

  private getDaysInMonth(): string[] {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    return Array.from({ length: daysInMonth }, (_, i) => (i + 1).toString());
  }
}
