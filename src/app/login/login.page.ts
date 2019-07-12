import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
  }

  goto(ev: any){
    let target = ev.target;
    let id = target.id;
    console.log(id);
    switch(id){
      case 'a1':
      this.router.navigate(['/face-login', { }], { relativeTo: this.route });
      break;
    }
  }
}
