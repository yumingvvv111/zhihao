import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buttom-bar',
  templateUrl: './buttom-bar.component.html',
  styleUrls: ['./buttom-bar.component.scss'],
})
export class ButtomBarComponent implements OnInit {

  constructor(
     public route: ActivatedRoute,
     public router: Router
  ) { }

  ngOnInit() {}

  goto(ev: any) {
    let target = ev.target;
    switch(target.id){
      case 'b1':
      this.router.navigate(['home', {}]);
      break;
      case 'b2':
      this.router.navigate(['ask-home', {}]);
      break;
      case 'b3':
      this.router.navigate(['prepare-camera', {}]);
      break;
      case 'b4':
      this.router.navigate(['search-page', {}]);
      break;
      case 'b5':
      this.router.navigate(['login', {}]);
      break;
    }
  }

}
