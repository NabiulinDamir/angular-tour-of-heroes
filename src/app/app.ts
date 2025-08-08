import { Component,  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyHeader } from './shared/my-header/my-header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyHeader],
  templateUrl: './app.html',
})
export class App {
  protected title = 'angular-tour-of-heroes';

  a = "hui"

}
