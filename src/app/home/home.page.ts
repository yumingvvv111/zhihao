import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public items: any = [
    {
      src: './assets/images/banner1.png',
    },
    {
      src: './assets/images/banner2.png',
    },
    {
      src: './assets/images/banner3.png',
    }
  ];

  public slideOptions: object = {
    initialSlide: 1,
    speed: 400,
    autoplay: true
  };
  constructor() {
  }




}
