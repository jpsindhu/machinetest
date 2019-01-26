import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { XkcdComicComponent } from './xkcd-comic/xkcd-comic.component';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import { ScrollingModule } from '@angular/cdk/scrolling';
@NgModule({
  imports:      [ BrowserModule ,VirtualScrollerModule,ScrollingModule],
  declarations: [ AppComponent, XkcdComicComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
