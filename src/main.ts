/* import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err)); */


 import * as NameAndWeatherLocation from './modules/nameandweather';
 import { Name as OtherName } from './modules/duplicatename';
 import { TempConverter } from './tempConverter';

 let cities: {[index: string]: [string, string]} = {};

 cities['London'] = ['raining', TempConverter.convertFtoC('38')];
 cities['Paris'] = ['sunny', TempConverter.convertFtoC('52')];
 cities['Berlin'] = ['snowing', TempConverter.convertFtoC('52')];

 for (let key in cities) {
  console.log(`${key}: ${cities[key][0]}, ${cities[key][1]}`);
}
 

