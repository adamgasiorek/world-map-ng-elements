import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import {ToggleModule} from "./toggle.module";
import {EMPTY, map, Observable, Subscription} from "rxjs";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [
    CommonModule,
    ToggleModule
  ],
  template: `
    world map
  `,
  styles: [`

  `],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ToggleComponent {

}
