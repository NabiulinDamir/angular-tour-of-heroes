import { Component, input } from '@angular/core';

@Component({
  selector: 'app-chart',
  imports: [],
  templateUrl: './chart.html',
})
export class Chart {
  power = input(0)
  pColor = ""
}
