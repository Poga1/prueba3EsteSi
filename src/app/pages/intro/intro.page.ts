import {
  Component,
  OnInit,
  ElementRef,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class IntroPage implements OnInit {
  @ViewChild('bg') background: ElementRef;
  @ViewChild('swiper') swiper: ElementRef | undefined;

  pages = [
    {
      title: 'Integrantes',
      text: 'Domingo Munoz, Nicolas Avila',
      img: './assets/imgs/intro1.png',
    },
  ];
  constructor(public renderer: Renderer2) {}

  ngOnInit() {
    StatusBar.setStyle({ style: Style.Dark });
  }
}
