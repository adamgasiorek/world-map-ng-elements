import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<!--    <app-world-map [list]="exampleList"></app-world-map>-->
<!--  <app-legend-map [list]="exampleList"></app-legend-map>-->`
})
export class AppComponent {
  exampleList = "['PL','RU','DE','CN']"
}
