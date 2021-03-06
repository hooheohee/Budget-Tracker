import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import * as $ from 'jquery';

if (environment.production) {
  enableProdMode();
}

$(document).ready(function(){
 $('.header').height($(window).height());
})

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
