import { Component, ViewChild  } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  rangeSelected:string[] = [];
  startMonth = '';
  endMonth='';

  title = 'demo-chart';
  months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

  constructor() {
  }

  ngOnInit() {

  }

  getRange() {

    console.log(this.months.indexOf(this.startMonth));
    console.log(this.months.indexOf(this.endMonth));
    this.rangeSelected = this.months.slice(this.months.indexOf(this.startMonth), this.months.indexOf(this.endMonth)+1)
    console.log(this.rangeSelected);
    return this.rangeSelected

  }

}
