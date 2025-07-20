import { Component } from '@angular/core';
import { Info } from '../../shared/info/info';
import { MyProjects } from '../../shared/my-projects/my-projects';
import { NgForComponent } from '../../shared/ng-for-component/ng-for-component';
@Component({
  selector: 'app-my-page',
  imports: [Info, MyProjects, NgForComponent],
  templateUrl: './my-page.html',
})
export class MyPage {

}
