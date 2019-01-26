import { Component, OnInit, Input,HostListener } from '@angular/core';

import { XkcdComic } from './xkcd-comic';
import * as CONTENTLISTINGPAGEPAGE1 from '../../assets/API/CONTENTLISTINGPAGE-PAGE1.json';
@Component({
  selector: 'app-xkcd-comic',
  templateUrl: './xkcd-comic.component.html',
  styleUrls: ['./xkcd-comic.component.css']
})


export class XkcdComicComponent implements OnInit {
  dataList :any;
  arr: any;
  constructor(

  ) { }
ngOnInit() {
  this.loadData();
}

loadData(){
  this.dataList = CONTENTLISTINGPAGEPAGE1.page["content-items"].content;
  this.arr = Array.from({length: 10000}).map((el,i) => `Option: ${++i}`);
  //console.log(this.dataList);
}
// @HostListener("window:scroll", [])
//   onWindowScroll() {
//     console.log("sss");
//   }
}