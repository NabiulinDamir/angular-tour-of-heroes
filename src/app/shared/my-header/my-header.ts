import { Component, HostListener  } from '@angular/core';
import resume from '../../document/resume.json'

@Component({
  selector: 'my-header',
  imports: [],
  templateUrl: './my-header.html',
})
export class MyHeader {
  headerImageFixed = false;

  email = resume.user.email
  number = resume.user.number

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event:any) {
    if(window.scrollY > 145 && !this.headerImageFixed){
      this.headerImageFixed = true
    }
    else if(window.scrollY < 145 && this.headerImageFixed){
      this.headerImageFixed = false
    }
  }

}


