import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  @ViewChild(IonContent) content: IonContent;

  constructor() {}

  scrollTo(_id: string) {
    let y = document.getElementById(_id).offsetTop-100;
    this.content.scrollToPoint(0, y, 1000);
  }
}
