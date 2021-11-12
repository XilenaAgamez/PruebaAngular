import { Component } from '@angular/core';
import varData from 'src/assets/json/DATA.json';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'xilenajson';

  vard: any = varData;
}
