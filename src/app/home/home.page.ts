import { Component } from '@angular/core';
import { AiFaceService } from '../ai-face.service';

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

  public listData = [{
    title: '瞧瞧你家的苹果变"丑"了没?',
    author: '植好',
    time: '07-15 08:09'
  },
  {
    title: '胶东地区进入雨季, 苹果炭疽叶枯病不可轻视',
    author: '植好',
    time: '07-15 08:10'
  },
  {
    title: '苹果膨大期, 用肥大集合, 看看作对了没',
    author: '植好',
    time: '07-03 08:11'
  },
  {
    title: '7月必防叶片病害-褐斑病, 可不能落下',
    author: '植好',
    time: '07-03 08:12'
  },
  {
    title: '苹果园招了大青叶蝉, 怎么治',
    author: '植好',
    time: '07-03 08:13'
  },
  {
    title: '苹果套袋时, 哪些措施必不可少',
    author: '植好',
    time: '07-03 08:14'
  },
  {
    title: '苹果套完袋得保叶, 对这, 你怎么看?',
    author: '植好',
    time: '07-03 08:15'
  }
];

  public slideOptions: object = {
    initialSlide: 1,
    speed: 400,
    autoplay: true
  };
  constructor(
    public aiFaceService: AiFaceService
  ) {
  }

  public chat(){
    alert('Todo Chat')
  }

  public search(){
    alert('Todo Search')
  }




}
