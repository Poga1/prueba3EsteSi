import { Component, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor() {}
}
