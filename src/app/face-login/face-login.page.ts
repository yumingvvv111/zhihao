import { Component, OnInit } from '@angular/core';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';
import { Platform } from '@ionic/angular';
import { AiFaceService } from '../ai-face.service';
@Component({
  selector: 'app-face-login',
  templateUrl: './face-login.page.html',
  styleUrls: ['./face-login.page.scss'],
})

export class FaceLoginPage {
  public name: string = 'sir';
  public gotName: boolean = false;
  constructor(
    private cameraPreview: CameraPreview,
    public platform: Platform,
    public aiFaceService: AiFaceService
  ) { }

  ngOnInit() {
    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 0,
      y: 0,
      width: window.screen.width,
      height: this.platform.height(),
      // camera: 'rear',
      tapPhoto: true,
      previewDrag: true,
      toBack: true
    }

    const pictureOption: CameraPreviewPictureOptions = {
      width:640, height:640, quality: 85
    };



    setTimeout(() => {
      alert(1111)
      
      this.aiFaceService.postPhoto('aaa');
      // start camera
      this.cameraPreview.startCamera(cameraPreviewOpts).then(
        (res) => {
          console.log(res)
          this.cameraPreview.show();
          alert(document.querySelectorAll('video').length);
          setTimeout(() => {  
            this.cameraPreview.takePicture(pictureOption).then((res) => {
              // alert(res);
              // this.aiFaceService.postPhoto(res);
              //todo request backend
            });
          }, 10000);
        },
        (err) => {
          console.log(err);
        });
    }, 1000);

  }

  ionViewWillLeave() {
    this.cameraPreview.stopCamera();
  }

}
