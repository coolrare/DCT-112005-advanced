import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { chartAreaDemo } from '../chart-area-demo';
import { chartPieDemo } from '../chart-pie-demo';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {
    chartPieDemo();
    chartAreaDemo();
  }

}
