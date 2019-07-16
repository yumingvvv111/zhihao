import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-prepare-camera',
  templateUrl: './prepare-camera.page.html',
  styleUrls: ['./prepare-camera.page.scss'],
})
export class PrepareCameraPage implements OnInit {

  constructor(
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
  }

  goto(id: string) {
   
    // let target = ev.target;
    console.log(id)

    switch(id){
      case 'apple':
      this.router.navigate(['scan-plantplant', { plant: 'apple' }]);
      break;  
      case 'grape':
      this.router.navigate(['scan-plantplant', { plant: 'grape'}]);
      break;
      case 'orange':
      this.router.navigate(['scan-plantplant',  { plant: 'orange'}]);
      break;
      case 'peanut':
      this.router.navigate(['scan-plantplant', { plant: 'peanut'}]);
      break;
      case 'tomato':
      this.router.navigate(['scan-plantplant', { plant: 'tomato'}]);
      break;
      case 'cucumber':
      this.router.navigate(['scan-plantplant', { plant: 'cucumber'}]);
      break;
      case 'eggplant':
      this.router.navigate(['scan-plantplant', { plant: 'eggplant'}]);
      break;
      case 'pepper':
      this.router.navigate(['scan-plantplant', { plant: 'pepper'}]);
      break;
      case 'potato':
      this.router.navigate(['scan-plantplant', { plant: 'potato'}]);
      break;
      case 'garlic':
      this.router.navigate(['scan-plantplant', { plant: 'garlic'}]);
      break;
      case 'wheat':
      this.router.navigate(['scan-plantplant', { plant: 'wheat'}]);
      break;
      case 'maize':
      this.router.navigate(['scan-plantplant', { plant: 'maize'}]);
      break;
    }
  }

}
