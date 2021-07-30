import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: [
  ]
})
export class GraficoDonaComponent implements OnInit {
  @Input() doughnutChartLabels: Label[] = [];
  @Input() doughnutChartType: ChartType = 'doughnut';
  @Input() chartColors: Array<any> = [{ backgroundColor: ['#B980F0', '#FE9898', '#F5E79D']}];
  @Input() doughnutChartData: MultiDataSet = [];

  constructor() { }

  ngOnInit(): void {
  }

}
