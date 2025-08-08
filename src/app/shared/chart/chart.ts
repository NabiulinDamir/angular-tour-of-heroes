import { Component, input } from '@angular/core';

@Component({
  selector: 'app-chart',
  imports: [],
  templateUrl: './chart.html',
})
export class Chart {
  power = input(0)
  
  pName(){
    if(this.power() > 75)     {return "превосходно"}
    else if(this.power() > 50){return "хорошо"}
    else if(this.power() > 25){return "любитель"}
    return "начинающий"
  }
}
