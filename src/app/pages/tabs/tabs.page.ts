import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationController, IonTabs, ModalController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';
import { CartModalPage } from '../cart-modal/cart-modal.page';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  @ViewChild(IonTabs) tabs: IonTabs;
  selected = 'home';
  cartCount = 0;
  @ViewChild('cartbtnmobile', { read: ElementRef }) cartBtnMobile: ElementRef;

  constructor(
    private cartService: CartService,
    private animationCtrl: AnimationController,
    private modalCtrl: ModalController
  ) {}
  ngOnInit() {
    this.cartService.getCartCount().subscribe((value) => {
      if (value > 0) {
        this.animateCart();
      }
      this.cartCount = value;
    });
  }
  setSelectedTab() {
    this.selected = this.tabs.getSelected();
  }
  animateCart() {
    const keyframes = [
      { offset: 0, transform: 'scale(1)' },
      { offset: 0.5, transform: 'scale(1.2)' },
      { offset: 0.8, transform: 'scale(0.9)' },
      { offset: 1, transform: 'scale(1)' },
    ];

    const cartAnimationMobile = this.animationCtrl
      .create('mobile')
      .addElement(this.cartBtnMobile.nativeElement)
      .duration(600)
      .keyframes(keyframes);
    cartAnimationMobile.play();
  }

  async openCart() {
    const modal = await this.modalCtrl.create({
      component: CartModalPage,
      cssClass: 'custom-modal',
    });

    await modal.present();
  }
}
