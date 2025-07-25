import { Component } from '@angular/core';
import { Info } from '../../shared/info/info';
import { MyProject } from '../../shared/my-project/my-project';
import  projects  from '../../document/projects.json'
@Component({
  selector: 'app-my-page',
  imports: [Info,  MyProject ],
  templateUrl: './my-page.html',
})
export class MyPage {
  data = projects

}
