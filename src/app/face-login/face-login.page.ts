import { Component, OnInit } from '@angular/core';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';
import { Platform } from '@ionic/angular';
import { AiFaceService } from '../ai-face.service';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

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
    public aiFaceService: AiFaceService,
    public alertController: AlertController,
    public route: ActivatedRoute,
    public router: Router
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

    // start camera
    this.cameraPreview.startCamera(cameraPreviewOpts).then(
      (res) => {
        console.log(res)
        this.cameraPreview.show();
        setTimeout(() => { 
          this.takePhoto();
        }, 5000);
      },
      (err) => {
        console.log(err);
      });
    // }, 1000);

  }


  async presentAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      subHeader: '',
      message,
      buttons: ['确定']
    });
    await alert.present();
  }

  takePhoto() {
    const pictureOption: CameraPreviewPictureOptions = {
      width: 640, height: 640, quality: 85
    };
    this.cameraPreview.takePicture(pictureOption).then((res) => {
      console.log('fffffffffffffffffffface', res);
      this.aiFaceService.postPhoto({
        url: 'http://yumingvvv.thanks.echosite.cn/api/handlePhoto/',
        data: {myfile1: res[0]}
      }).then((result: any) => {
        let resultStr = result.data;
        if(resultStr.indexOf('未存档') > 0){
          this.presentAlert('请录入头像', resultStr);
        }else{
          this.presentAlert('成功', '欢迎您' + resultStr);
          this.router.navigate(['../my-setting-home', { name: resultStr }]);
        }
      }, (ex) => {
        this.presentAlert('失败', '解析错误');
        console.log('face-long.page', ex);
      });
    });
  }

  ionViewWillLeave() {
    this.cameraPreview.stopCamera();
  }

}
