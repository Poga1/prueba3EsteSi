import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import {
  Camera,
  CameraResultType,
  CameraSource,
  CameraPermissionType,
} from '@capacitor/camera';
import { AvatarService } from 'src/app/services/avatar.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  profile: any;

  constructor(
    private avatarService: AvatarService,
    private authService: AuthService,
    private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) {
    this.avatarService.getUserProfile().subscribe((data) => {
      this.profile = data;
    });
  }

  ngOnInit(): void {
    this.requestCameraPermissions();
  }

  async requestCameraPermissions() {
    const permissions = await Camera.requestPermissions({
      permissions: ['camera', 'photos'],
    });

    if (!permissions.camera || !permissions.photos) {
      const alert = await this.alertController.create({
        header: 'Permissions required',
        message:
          'Camera and Photos permissions are required to use this feature.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

  async changeImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Photos, // Camera, Photos or Prompt!
      saveToGallery: true,
    });

    if (image) {
      const loading = await this.loadingController.create();
      await loading.present();

      const result = await this.avatarService.uploadImage(image);
      loading.dismiss();

      if (!result) {
        const alert = await this.alertController.create({
          header: 'Upload failed',
          message: 'There was a problem uploading your avatar.',
          buttons: ['OK'],
        });
        await alert.present();
      }
    }
  }
}
