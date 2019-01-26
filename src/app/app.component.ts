import { Component } from '@angular/core';

import { XkcdComic } from './xkcd-comic/xkcd-comic';
import * as CONTENTLISTINGPAGEPAGE1 from '../assets/API/CONTENTLISTINGPAGE-PAGE1.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
 // styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {

 comicsList = CONTENTLISTINGPAGEPAGE1.page["content-items"];

}
