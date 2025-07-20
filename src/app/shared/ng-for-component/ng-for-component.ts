import { Component, input } from '@angular/core';

@Component({
  selector: 'app-ng-for-component',
  imports: [],
  templateUrl: './ng-for-component.html',
  styleUrl: './ng-for-component.css'
})
export class NgForComponent {
  data = ['первый','второй']
  value = input('дефолт');
}
