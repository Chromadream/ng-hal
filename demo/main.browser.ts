import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app';
import { decorateComponentRef } from './platform/environment';

/* Bootstrap our Angular app with a top level ngmodule `AppModule`. */
export function main(initialHmrState?: any): Promise<any> {

  return platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then(decorateComponentRef)
    .catch(err => console.error(err));
}
