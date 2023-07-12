import {ApplicationRef, DoBootstrap, Injector, NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {createCustomElement} from "@angular/elements";
import {WorldMapComponent} from "./map/world-map/world-map.component";
import {MapsModule} from "./map/maps.module";
import {LegendMapComponent} from "./map/legend-map/legend-map.component";

@NgModule({
  imports: [
    BrowserModule,
    MapsModule
  ],
  providers: [],
})
export class ElementModule implements DoBootstrap {

  constructor(
    private injector: Injector
  ) {}

  ngDoBootstrap(appRef: ApplicationRef) {
    if (!customElements.get('world-map')) {
      // Register only if 'login-provider' entry is not found in the registry

      // Step 3: loginComponent stores the constructor class
      const worldComponent = createCustomElement(WorldMapComponent, {
        injector: this.injector,    // This injector is used to load the component's factory
      });

      // Step 4: Registering custom tag 'login-provider' with the obtained custom class
      customElements.define('world-map', worldComponent);
    }
    if (!customElements.get('world-legend-map')) {
      // Register only if 'login-provider' entry is not found in the registry

      // Step 3: loginComponent stores the constructor class
      const worldLegendComponent = createCustomElement(LegendMapComponent, {
        injector: this.injector,    // This injector is used to load the component's factory
      });

      // Step 4: Registering custom tag 'login-provider' with the obtained custom class
      customElements.define('world-legend-map', worldLegendComponent);
    }
  }
}
