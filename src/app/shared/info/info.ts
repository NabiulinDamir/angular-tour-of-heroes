import { Component } from '@angular/core';
import resume from '../../document/resume.json'
import { Chart } from '../chart/chart';

@Component({
  selector: 'app-info',
  imports: [Chart],
  templateUrl: './info.html',
})
export class Info {
  userData = resume
}
