import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardViewComponent } from '../dashboard-view/dashboard-view.component';

@Component({
  selector: 'nxexp-dashboard',
  standalone: true,
  imports: [CommonModule, DashboardViewComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
