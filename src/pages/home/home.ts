import { Component, Input } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Camera } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public imageData: string;
  @Input('useURI') useURI: Boolean = true;

  constructor(public navCtrl: NavController) {

  }

  getPicture(sourceType){
    Camera.getPicture({
      quality: 50,
      allowEdit: true,
      encodingType: 0,
      saveToPhotoAlbum: false,
      destinationType: this.useURI ? 1 : 0,
      targetHeight: 800,
      targetWidth: 800,
      sourceType: sourceType
    }).then((imageData)=>{
      if (this.useURI){
        this.imageData = imageData;
      }else{
        this.imageData = 'data:image/jpeg;base64,' + imageData;
      }
    }, (err)=>{
      console.log(err);
    });
  }
}
