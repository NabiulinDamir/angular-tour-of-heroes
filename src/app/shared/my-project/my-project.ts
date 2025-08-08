import { Component, input } from '@angular/core';

@Component({
  selector: 'app-my-project',
  imports: [],
  templateUrl: './my-project.html',

})
export class MyProject {
  id = input(0)
  title = input('дефолт');
  links = input([{name: "", link: ''}]);
  description = input('');
  tools = input([{name: "", link: ''}])
  image = input({name:"", href:""})
  

  // text = (JSON.stringify(this.tools()));

}
