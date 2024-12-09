import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CallsService } from '../../../services/calls.service';

@Component({
  selector: 'app-calls-chart',
  templateUrl: 'calls-chart.component.html',
  styleUrls: ['calls-chart.component.scss'],
  standalone: true,
  imports: [NgIf, FormsModule, NgFor, RouterLink, CommonModule],
})

export class CallsChartComponent implements OnInit {
  calls: any[] = [];
  filteredCalls: any[] = [];
  searchTerm: string = '';
  isLoading: boolean = true;
  activeCall: any | null = null;

  constructor(private callsService: CallsService) {}

  ngOnInit(): void {
    this.loadCalls();
  }

  loadCalls(): void {
    this.isLoading = true;
    this.callsService.getAllCalls().subscribe(
      (data) => {
        this.calls = data;
        this.filteredCalls = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching calls', error);
        this.isLoading = false;
      }
    );
  }

  filterCalls(): void {
    this.filteredCalls = this.calls.filter(call =>
      call.entrada.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      call.salida.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      call.fecha.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  showDetails(call: any): void {
    this.activeCall = call;
  }

  closeDetails(): void {
    this.activeCall = null;
  }
}