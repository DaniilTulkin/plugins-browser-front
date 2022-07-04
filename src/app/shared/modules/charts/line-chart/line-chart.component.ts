import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  data: number[][] = [
    [3, 2],
    [15, 12],
    [20, 5],
    [23, 10],
    [26, 1]
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
