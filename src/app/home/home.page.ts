import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild (IonContent) content: IonContent;

  constructor() {}

  scrollTo(_id: string) {
    let y = document.getElementById(_id).offsetTop;
    this.content.scrollToPoint(0,y,1000);
  }

   myFunction() {
     console.log('test');
    let x = document.getElementById('myLinks');
    let z = document.getElementById('test');
    if (x.style.display === 'block') {
      x.style.display = 'none';
      z.style.display= 'block';
    } else {
      x.style.display = 'block';
      z.style.display = 'none';
    }
  }

  buttonTest(){
    console.log('woi');
    let z = document.getElementById('test');
    let x = document.getElementById('myLinks');
    if (z.style.display === 'block') {
      z.style.display = 'block';
      x.style.display = 'none';
    } else {
      z.style.display = 'none';
      x.style.display= 'block';
    }
  }
}
