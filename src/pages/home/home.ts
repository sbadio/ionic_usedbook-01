import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScanPage } from '../scan/scan';
import { BookListPage } from '../book-list/book-list';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {  
    this.navCtrl.setRoot(HomePage);
  }
  scanPage(){
      this.navCtrl.push(ScanPage);
  }
  bookListPage(){
    this.navCtrl.push(BookListPage);
  }  
}
