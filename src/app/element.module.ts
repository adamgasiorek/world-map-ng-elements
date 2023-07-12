import {ApplicationRef, DoBootstrap, Injector, NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {ToggleComponent} from "./toggle.component";
import {createCustomElement} from "@angular/elements";

@NgModule({
  imports: [
    BrowserModule,
    ToggleComponent
  ],
  providers: [],
})
export class ElementModule implements DoBootstrap {

  constructor(
    private injector: Injector
  ) {}

  ngDoBootstrap(appRef: ApplicationRef) {
    if (!customElements.get('login-provider')) {
      // Register only if 'login-provider' entry is not found in the registry

      // Step 3: loginComponent stores the constructor class
      const loginComponent = createCustomElement(ToggleComponent, {
        injector: this.injector,    // This injector is used to load the component's factory
      });

      // Step 4: Registering custom tag 'login-provider' with the obtained custom class
      customElements.define('login-provider', loginComponent);
    }
  }
}
