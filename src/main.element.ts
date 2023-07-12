import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ElementModule } from './app/element.module';
import 'zone.js';

// if (environment.production) {
//   enableProdMode();
// }

platformBrowserDynamic().bootstrapModule(ElementModule)
  .catch(err => console.error(err));
