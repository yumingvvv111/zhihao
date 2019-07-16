import { Component, OnInit } from '@angular/core';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';
import { Platform } from '@ionic/angular';
import { AiFaceService } from '../ai-face.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-scan-plantplant',
  templateUrl: './scan-plantplant.page.html',
  styleUrls: ['./scan-plantplant.page.scss'],
})
export class ScanPlantplantPage implements OnInit {

  public deviceHeight: any = this.platform.height();
  public isShowImg = false;
  public img = 'about:blank';
  constructor(
    private cameraPreview: CameraPreview,
    public platform: Platform,
    public aiFaceService: AiFaceService,
    public alertController: AlertController
  ) { }


  ngOnInit() {
    // return new Promise((resolve, reject) => {
    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 0,
      y: 0,
      width: window.screen.width,
      height: this.deviceHeight,
      camera: 'rear',
      tapPhoto: true,
      previewDrag: true,
      toBack: true
    }

    this.platform.ready().then(() => {
      this.cameraPreview.startCamera(cameraPreviewOpts).then(
        (res) => {
          this.cameraPreview.show();
          console.log('video length', document.querySelectorAll('video').length);
        },
        (err) => {
          console.log(err);
        });
    });
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

  cancel() {
    this.isShowImg = false;
  }

  submit() {
    const pictureOption: CameraPreviewPictureOptions = {
      width: 640, height: 640, quality: 85
    };
    this.cameraPreview.takePicture(pictureOption).then((res) => {
      this.aiFaceService.postPhoto({
        // url: 'http://www.mocky.io/v2/5d2d22b13100005200f5ac8f',
        url: 'http://yumingvvv.thanks.echosite.cn/api/handlePhoto/',
        // url: 'http://39.97.224.231:9000/api/discern_base64',
        data: { myfile: res[0] }
      }).then((result: any) => {
        let resultData = result.data;
        this.presentAlert('成功', '分析结果是:' + (resultData.title || '不是植物'));
      }, (ex) => {
        this.presentAlert('失败', '识别错误');
      });
      let imgData = 'data:image/png;base64,' + res;
      this.img = imgData;
      // document.getElementById('previewImg').setAttribute('src', imgData);
      this.isShowImg = true;
    });
  }

  ionViewWillLeave() {
    this.cameraPreview.stopCamera();
  }

}
