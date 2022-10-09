import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, OnChanges {
  arrMonth:string[] = []
  @Input() set rangeSelected(val:string[]) {

    console.log('val',val);
    this._rangeSelected = val
  }

  private _rangeSelected = [
    'January', 'February', 'March', 'April'
  ]

  get rangeSelected() {
    return this._rangeSelected
  }


  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('change', this.rangeSelected);
    this.rangeSelected = this.rangeSelected;
    this.chart?.update();

  }

  ngOnInit(): void {
    console.log(this.rangeSelected);

  }

  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: this.rangeSelected,
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40, 59, 80, 81, 56, 55 ],
        label: 'Muc tieu',
        tension: 0.5,
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
      {
        data: [ 28, 48, 40, 19, 86, 27, 90, 48, 40, 19, 86, 27],
        label: 'Thuc hien',
        backgroundColor: 'rgba(255,0,0,0.3)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)',
        fill: 'origin',
      },
    ]
  };
  lineChartOptions: ChartOptions<'line'> = {
    responsive: true
  };
  lineChartLegend = false;

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;


}


